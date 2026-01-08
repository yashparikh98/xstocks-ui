"use client";

import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { env } from "@/config/env";
import { Web3AuthWalletAdapter } from "@/lib/web3auth/Web3AuthWalletAdapter";

// Import wallet adapter styles
import "@solana/wallet-adapter-react-ui/styles.css";

const WEB3AUTH_CLIENT_ID = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "";

// Debug: log to verify env var is loaded
if (typeof window !== "undefined") {
  console.log("Web3Auth Client ID configured:", !!WEB3AUTH_CLIENT_ID);
}

interface SolanaProviderProps {
  children: React.ReactNode;
}

export function SolanaProvider({ children }: SolanaProviderProps) {
  const endpoint = useMemo(() => env.SOLANA_RPC_URL, []);

  // Include Web3Auth alongside auto-detected wallets (Phantom, Solflare, etc.)
  const wallets = useMemo(() => {
    const adapters = [];

    // Only add Web3Auth if client ID is configured
    if (WEB3AUTH_CLIENT_ID) {
      adapters.push(new Web3AuthWalletAdapter(WEB3AUTH_CLIENT_ID));
    }

    return adapters;
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
