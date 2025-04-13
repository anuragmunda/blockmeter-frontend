import { create } from "zustand";
import { persist } from "zustand/middleware";

type ChainStoreState = {
    selectedChainId: number;
}

type ChainStoreActions = {
    setSelectedChainId: (chainId: number) => void;
}

type ChainStore = ChainStoreState & ChainStoreActions

const useChainStore = create(
    persist<ChainStore>((set) => ({
        selectedChainId: 0, // Default to Ethereum
        setSelectedChainId: (chainId) => set(() => ({
             selectedChainId: chainId 
            })),
    }),
        { name: "chain-store", }
        
    ),
)

export default useChainStore