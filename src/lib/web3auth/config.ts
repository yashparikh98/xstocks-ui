import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";

export const WEB3AUTH_CLIENT_ID = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "";

export const web3AuthConfig = {
  clientId: WEB3AUTH_CLIENT_ID,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    chainId: "0x1", // Mainnet
    rpcTarget: process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com",
    displayName: "Solana Mainnet",
    blockExplorerUrl: "https://explorer.solana.com",
    ticker: "SOL",
    tickerName: "Solana",
  },
};
