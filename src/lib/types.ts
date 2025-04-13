export type GasPricePayload = {
    timestamp: string;
    lastBlock: number;
    avgTime: number;
    avgTx: number;
    avgGas: number;
    speeds: Array<Speed>;
}

export type GasPriceHistoryPayload = {
    gasPrice: {
        open: number;
        close: number;
        low: number;
        high: number;
    };
    avgGas: number;
    timestamp: string;
    samples: number;
}

export type Speed = {
    acceptance: number;
    maxFeePerGas: number;
    maxPriorityFeePerGas: number;
    baseFee: number;
    estimatedFee: number;
}

export type Chain = {
    chainId: number;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
}