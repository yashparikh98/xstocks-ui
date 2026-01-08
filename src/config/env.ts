export const env = {
  SOLANA_RPC_URL:
    process.env.NEXT_PUBLIC_SOLANA_RPC_URL ||
    "https://api.mainnet-beta.solana.com",
  SOLANA_NETWORK: process.env.NEXT_PUBLIC_SOLANA_NETWORK || "mainnet-beta",
  JUPITER_API_KEY: process.env.NEXT_PUBLIC_JUPITER_API_KEY || "",
} as const;
