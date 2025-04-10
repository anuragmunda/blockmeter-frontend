'use client'

import { useState } from "react";
import { chainList } from "@/utils/chain-list";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';


const ChainSelector = () => {
    const [selectedChain, setSelectedChain] = useState(chainList[0].chainName); // Default to the first chain in the list

    return (
        <Select
            value={selectedChain}
            onValueChange={
                (value) => setSelectedChain(value)
            }>
            <SelectTrigger className="cursor-pointer w-70 py-6 px-6 text-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl text-white font-medium transition-all hover:bg-white/20">
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