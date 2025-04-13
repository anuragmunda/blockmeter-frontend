import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Chain, Speed } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getChainFromId = (chainId: number): string => {
  const chain = chainList.find((chain) => chain.chainId === chainId);
  return chain ? chain.chainName : 'Ethereum';
}

export const getIdFromChain = (chainName: string): number => {
  const chain = chainList.find((chain) => chain.chainName.trim() === chainName.trim());
  return chain ? chain.chainId : 1;
}

export const getTransactionSpeed = (index: number): string => {
  switch (index) {
    case 0:
      return 'Slow';
    case 1:
      return 'Standard';
    case 2:
      return 'Fast';
    case 3:
      return 'Instant';
    default:
      return 'Unknown';
  }
}

export const getSpeedColor = (speed: string): string => {
  switch (speed) {
    case 'Slow':
      return 'text-red-400';
    case 'Standard':
      return 'text-amber-500';
    case 'Fast':
      return 'text-lime-300';
    case 'Instant':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
}

export const getAverageGasPrice = (speeds: Speed[]): number => {
  const totalGasPrice = speeds.reduce((acc, speed) => acc + speed.maxFeePerGas, 0);
  return totalGasPrice / speeds.length;
}

export function formatSmartFloat(value: number): string {
  if (value === 0) return '0.00';

  const str = value.toString();
  const [whole, decimal = ''] = str.split('.');

  if (whole !== '0') {
    // Normal numbers like 1.23 → just fix to 2 decimals
    return Number(value).toFixed(2);
  }

  // For values less than 1
  let result = '0.';
  let nonZeroFound = false;
  let count = 0;

  for (let i = 0; i < decimal.length; i++) {
    const digit = decimal[i];
    result += digit;

    if (digit !== '0') {
      nonZeroFound = true;
      count++;
    } else if (nonZeroFound) {
      count++;
    }

    if (nonZeroFound && count === 2) break;
  }

  return result;
}



// List of supported chains
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
    chainId: 137,
    chainName: 'Polygon',
    nativeCurrency: {
      name: 'Polygon MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  {
    chainId: 43114,
    chainName: 'Avalanche',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io'],
  },
  {
    chainId: 42161,
    chainName: 'Arbitrum One',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  {
    chainId: 10,
    chainName: 'Optimism',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.optimism.io'],
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
  },
  {
    chainId: 8453,
    chainName: 'Base',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.base.org'],
    blockExplorerUrls: ['https://basescan.org'],
  },
  {
    chainId: 250,
    chainName: 'Fantom',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ftm.tools'],
    blockExplorerUrls: ['https://ftmscan.com'],
  },
  {
    chainId: 25,
    chainName: 'Cronos',
    nativeCurrency: {
      name: 'Cronos',
      symbol: 'CRO',
      decimals: 18,
    },
    rpcUrls: ['https://evm.cronos.org'],
    blockExplorerUrls: ['https://cronoscan.com'],
  },
  {
    chainId: 42220,
    chainName: 'Celo',
    nativeCurrency: {
      name: 'Celo',
      symbol: 'CELO',
      decimals: 18,
    },
    rpcUrls: ['https://forno.celo.org'],
    blockExplorerUrls: ['https://explorer.celo.org'],
  },
  {
    chainId: 59144,
    chainName: 'Linea',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.linea.build'],
    blockExplorerUrls: ['https://lineascan.build'],
  },
  {
    chainId: 81457,
    chainName: 'Blast',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.blast.io'],
    blockExplorerUrls: ['https://blastscan.io'],
  },
  {
    chainId: 5000,
    chainName: 'Mantle',
    nativeCurrency: {
      name: 'Mantle',
      symbol: 'MNT',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.mantle.xyz'],
    blockExplorerUrls: ['https://explorer.mantle.xyz'],
  },
  {
    chainId: 1666600000,
    chainName: 'Harmony Mainnet',
    nativeCurrency: {
      name: 'ONE',
      symbol: 'ONE',
      decimals: 18,
    },
    rpcUrls: ['https://api.harmony.one'],
    blockExplorerUrls: ['https://explorer.harmony.one'],
  },
  {
    chainId: 122,
    chainName: 'Fuse',
    nativeCurrency: {
      name: 'Fuse',
      symbol: 'FUSE',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.fuse.io'],
    blockExplorerUrls: ['https://explorer.fuse.io'],
  },
  {
    chainId: 369,
    chainName: 'PulseChain',
    nativeCurrency: {
      name: 'Pulse',
      symbol: 'PLS',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.pulsechain.com'],
    blockExplorerUrls: ['https://scan.pulsechain.com'],
  }
]