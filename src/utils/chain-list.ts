export const chainList: Chain[] = [
    {
        chainId: 1,
        chainName: 'Ethereum',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'],
        blockExplorerUrls: ['https://etherscan.io'],
    },
    {
        chainId: 56,
        chainName: 'Binance',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        blockExplorerUrls: ['https://bscscan.com'],
    },
    {
        chainId: 137,
        chainName: 'Polygon',
        nativeCurrency: {
            name: 'Polygon MATIC',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        blockExplorerUrls: ['https://bscscan.com'],
    }
]

type Chain = {
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