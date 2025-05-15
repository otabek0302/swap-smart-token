import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const ROUTER_ADDRESS = process.env.NEXT_PUBLIC_ROUTER_ADDRESS as `0x${string}` | undefined;
export const AOG_ADDRESS = process.env.NEXT_PUBLIC_AOG_ADDRESS as `0x${string}` | undefined;
export const AOS_ADDRESS = process.env.NEXT_PUBLIC_AOS_ADDRESS as `0x${string}` | undefined;

export const FACTORY_ADDRESS = (process.env.NEXT_PUBLIC_FACTORY_ADDRESS || '0x0000000000000000000000000000000000000000') as `0x${string}`;

export const DAPP_CONFIG = {
    readOnlyChainId: sepolia.id,
    readOnlyUrls: {
        [sepolia.id]: process.env.NEXT_PUBLIC_SEPOLIA_RPC,
    },
    supportedChainIds: [sepolia.id],
};

// Use a default project ID for development
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID';

export const config = getDefaultConfig({
    appName: 'MiniSwap',
    projectId,
    chains: [sepolia],
    ssr: true
});