'use client'

import GasPriceCard from "@/components/gas-price-card";
import { fetchGasPrice, fetchGasPriceHistory } from "@/services/dashboard-data";
import { useEffect, useState } from "react";
import useChainStore from "@/stores/chain-store";
import { GasPriceHistoryPayload, GasPricePayload } from "@/lib/types";
import { formatSmartFloat, getAverageGasPrice } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useStore } from "zustand";
import CountdownTimer from "@/components/countdown-timer";
import useSocketStore from "@/stores/socket-store";
import GasHistoryChart from "@/components/gas-history-chart";

const Home = () => {
  const [gasPrice, setGasPrice] = useState<GasPricePayload | null>(null);
  const [gasPriceHistories, setGasPriceHistories] = useState<Array<GasPriceHistoryPayload> | []>([]);
  const selectedChainId = useStore(useChainStore, (state) => state.selectedChainId);
  const { socket } = useSocketStore()

  const fetchData = async (chainId: number) => {
    const gasPrice = await fetchGasPrice(chainId);
    setGasPrice(gasPrice);
  };

  const fetchHistoryData = async (chainId: number) => {
    const gasPriceHistories = await fetchGasPriceHistory(chainId);
    setGasPriceHistories(gasPriceHistories);
  };

  useEffect(() => {
    const chainPersist = localStorage.getItem("chain-store")
    let chainId: number;
    if (!chainPersist) {
      chainId = 1; // Default to Ethereum
    } else {
      if (selectedChainId === 0) return
      chainId = selectedChainId;
    }

    fetchData(chainId);
    fetchHistoryData(chainId);
  }, [selectedChainId]);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected to server");
      });
      socket.on("gasPriceUpdate", (data: GasPricePayload) => {
        console.log(data);
        setGasPrice(data);
      });
      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
    }
    return () => {
      if (socket) {
        socket.off("connect");
        socket.off("onMessage");
        socket.off("disconnect");
      }
    }
  }, [socket])

  return (
    <div className="bg-gray-200 p-4">
      <div className="border-3 border-indigo-500 rounded-lg grid grid-cols-1 justify-items-center gap-6 p-5 mb-10 font-[family-name:var(--font-geist-sans)]">
        <span className="text-2xl font-bold tracking-tight pb-1.5 border-b-6 border-b-indigo-500 my-4">current gas price</span>

        <div className="text-white min-w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center gap-3 justify-center border py-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Average Fee</h1>
          {gasPrice && (<h2 className="text-2xl font-semibold tracking-wider text-cyan-500">{`${formatSmartFloat(getAverageGasPrice(gasPrice?.speeds || []))} GWEI`}</h2>)}
        </div>

        <Separator className="bg-indigo-500" />

        <div className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gasPrice && gasPrice?.speeds.map((speed, index) => (
            <GasPriceCard key={index} speed={speed} index={index} />
          ))}
        </div>


        <Separator className="bg-indigo-500" />

        <div className="min-w-full md:justify-center flex flex-col md:flex-row gap-4">
          <div className="md:flex-1 text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center border py-3 rounded-lg shadow-md">
            <h1 className="text-lg tracking-wide">Last Block</h1>
            {gasPrice && (<h2 className="text-xl font-semibold tracking-wider text-cyan-500">{gasPrice.lastBlock}</h2>)}
          </div>

          <div className="md:flex-1 text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center border py-3 rounded-lg shadow-md">
            <h1 className="text-lg tracking-wide">Next update in</h1>
            {gasPrice && <CountdownTimer />}
          </div>
        </div>
      </div>

      <GasHistoryChart histories={gasPriceHistories} />

    </div>
  );
}

export default Home;