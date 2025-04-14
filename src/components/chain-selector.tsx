'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import useChainStore from '@/stores/chain-store';
import { getChainFromId, getIdFromChain, chainList } from "@/lib/utils";
import useSocketStore from '@/stores/socket-store';

const ChainSelector = () => {
    const currentChainId = useChainStore((state) => state.selectedChainId)
    const updateChainId = useChainStore((state) => state.setSelectedChainId)
    const { socket } = useSocketStore()

    return (
        <Select
            value={getChainFromId(currentChainId)}
            onValueChange={(value) => {
                updateChainId(getIdFromChain(value))
                socket?.emit("onChainId", getIdFromChain(value))
            }}>
            <SelectTrigger className="cursor-pointer w-full md:w-[50%] py-6 px-6 text-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl text-white font-medium transition-all hover:bg-white/20">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-white/20 bg-white/30 text-white backdrop-blur-md shadow-lg rounded-2xl overflow-hidden">
                {chainList.map((chain) => (
                    <SelectItem
                        key={chain.chainId}
                        value={chain.chainName}
                        className='cursor-pointer text-base focus:bg-white/50 transition-colors rounded-lg px-2'
                    >
                        {chain.chainName}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default ChainSelector