"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Connection() {
    const { address } = useAccount();
    console.log(address);
    return (
        <ConnectButton />
    )
}