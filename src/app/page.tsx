'use client'

import { WebSocketContext } from "@/WebSocketContext";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  // const socket = io("http://localhost:3000")
  // const [message, setMessage] = useState<MessagePayload | null>(null);

  // type MessagePayload = {
  //   timestamp: string;
  //   lastBlock: number;
  //   avgTime: number;
  //   avgTx: number;
  //   avgGas: number;
  //   speeds: Array<{
  //     acceptance: number;
  //     maxFeePerGas: number;
  //     maxPriorityFeePerGas: number;
  //     baseFee: number;
  //     estimatedFee: number;
  //   }>;
  // }

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to server");
  //   })
  //   socket.on("gasPriceUpdate", (data: MessagePayload) => {
  //     console.log(data)
  //     setMessage(data)
  //   })
  //   socket.on("disconnect", () => {
  //     console.log("Disconnected from server");
  //   })
  //   return () => {
  //     socket.off("connect");
  //     socket.off("onMessage");
  //     socket.off("disconnect");
  //   }
  // }, [socket])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello World!
      <button
        // onClick={() => socket.emit("message", "137")}
      >
        Get Message
      </button>
      <div className="text-center text-2xl font-bold">
      </div>
    </div>
  );
}
