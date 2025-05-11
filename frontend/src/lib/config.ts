import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const ROUTER_ADDRESS = process.env.NEXT_PUBLIC_ROUTER_ADDRESS!;
export const AOG_ADDRESS = process.env.NEXT_PUBLIC_AOG_ADDRESS!;
export const AOS_ADDRESS = process.env.NEXT_PUBLIC_AOS_ADDRESS!;

export const DAPP_CONFIG = {
    readOnlyChainId: sepolia.id,
    readOnlyUrls: {
        [sepolia.id]: process.env.NEXT_PUBLIC_SEPOLIA_RPC!,
    },
    supportedChainIds: [sepolia.id],
};

export const config = getDefaultConfig({
    appName: 'MiniSwap',
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    chains: [sepolia],
    ssr: true,
});