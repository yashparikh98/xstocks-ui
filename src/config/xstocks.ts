import type { XStockToken } from "@/types/token";

// xStock token mint addresses from Jupiter/Solana
// These are tokenized US equities by xStocks (Backed Finance)
export const XSTOCK_TOKENS: XStockToken[] = [
  {
    symbol: "xNVDA",
    name: "NVIDIA Corporation",
    mint: "9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P",
    decimals: 9,
    underlyingTicker: "NVDA",
    logoURI: "/tokens/nvda.png",
  },
  {
    symbol: "xAAPL",
    name: "Apple Inc.",
    mint: "HLm32fkK51wSi8TM9DvFmPuKjNbKzPkCTrXPnygsMVUp",
    decimals: 9,
    underlyingTicker: "AAPL",
    logoURI: "/tokens/aapl.png",
  },
  {
    symbol: "xTSLA",
    name: "Tesla, Inc.",
    mint: "3n3LPMZ4PTLpKqTxkHfrAtqdqFKUxzGbrBhi7qKHnipG",
    decimals: 9,
    underlyingTicker: "TSLA",
    logoURI: "/tokens/tsla.png",
  },
  {
    symbol: "xMSFT",
    name: "Microsoft Corporation",
    mint: "ANNmJmGxHwUsVRnqfLfbcH3eH1f1YuBDGoMbgeAt9zLP",
    decimals: 9,
    underlyingTicker: "MSFT",
    logoURI: "/tokens/msft.png",
  },
  {
    symbol: "xAMZN",
    name: "Amazon.com, Inc.",
    mint: "7VDEsKBXWSjVVaVzqz5vfuU2G5xCXvVRjTHqP9Kjqwn1",
    decimals: 9,
    underlyingTicker: "AMZN",
    logoURI: "/tokens/amzn.png",
  },
  {
    symbol: "xGOOGL",
    name: "Alphabet Inc.",
    mint: "67So6HhEkba1cPTJ2KUQGCE2t5M9YnJLCBq4gQ1NyLAn",
    decimals: 9,
    underlyingTicker: "GOOGL",
    logoURI: "/tokens/googl.png",
  },
  {
    symbol: "xMETA",
    name: "Meta Platforms, Inc.",
    mint: "METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr",
    decimals: 9,
    underlyingTicker: "META",
    logoURI: "/tokens/meta.png",
  },
  {
    symbol: "xCOIN",
    name: "Coinbase Global, Inc.",
    mint: "CbNYA9n3927sKrDffRomi6jkJn2ULL5NWP9mpt3hprvL",
    decimals: 9,
    underlyingTicker: "COIN",
    logoURI: "/tokens/coin.png",
  },
];

// Helper to get token by mint
export function getXStockByMint(mint: string): XStockToken | undefined {
  return XSTOCK_TOKENS.find((t) => t.mint === mint);
}

// Helper to get token by symbol
export function getXStockBySymbol(symbol: string): XStockToken | undefined {
  return XSTOCK_TOKENS.find((t) => t.symbol === symbol);
}
