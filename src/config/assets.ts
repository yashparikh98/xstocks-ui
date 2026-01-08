import type { Token } from "@/types/token";

export type AssetCategory = "stocks" | "crypto" | "pre-ipo" | "index" | "commodities";

export interface Asset extends Token {
  category: AssetCategory;
  ticker: string;
  change24h?: number;
  price?: number;
}

// US Stocks
export const STOCKS: Asset[] = [
  {
    symbol: "NVDAx",
    name: "NVIDIA Corporation",
    mint: "Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh",
    decimals: 9,
    ticker: "NVDA",
    category: "stocks",
  },
  {
    symbol: "xAAPL",
    name: "Apple Inc.",
    mint: "HLm32fkK51wSi8TM9DvFmPuKjNbKzPkCTrXPnygsMVUp",
    decimals: 9,
    ticker: "AAPL",
    category: "stocks",
  },
  {
    symbol: "xTSLA",
    name: "Tesla, Inc.",
    mint: "3n3LPMZ4PTLpKqTxkHfrAtqdqFKUxzGbrBhi7qKHnipG",
    decimals: 9,
    ticker: "TSLA",
    category: "stocks",
  },
  {
    symbol: "xMSFT",
    name: "Microsoft Corporation",
    mint: "ANNmJmGxHwUsVRnqfLfbcH3eH1f1YuBDGoMbgeAt9zLP",
    decimals: 9,
    ticker: "MSFT",
    category: "stocks",
  },
  {
    symbol: "xAMZN",
    name: "Amazon.com, Inc.",
    mint: "7VDEsKBXWSjVVaVzqz5vfuU2G5xCXvVRjTHqP9Kjqwn1",
    decimals: 9,
    ticker: "AMZN",
    category: "stocks",
  },
  {
    symbol: "xGOOGL",
    name: "Alphabet Inc.",
    mint: "67So6HhEkba1cPTJ2KUQGCE2t5M9YnJLCBq4gQ1NyLAn",
    decimals: 9,
    ticker: "GOOGL",
    category: "stocks",
  },
  {
    symbol: "xMETA",
    name: "Meta Platforms, Inc.",
    mint: "METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr",
    decimals: 9,
    ticker: "META",
    category: "stocks",
  },
  {
    symbol: "xCOIN",
    name: "Coinbase Global, Inc.",
    mint: "CbNYA9n3927sKrDffRomi6jkJn2ULL5NWP9mpt3hprvL",
    decimals: 9,
    ticker: "COIN",
    category: "stocks",
  },
];

// Crypto
export const CRYPTO: Asset[] = [
  {
    symbol: "SOL",
    name: "Solana",
    mint: "So11111111111111111111111111111111111111112",
    decimals: 9,
    ticker: "SOL",
    category: "crypto",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    mint: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
    decimals: 8,
    ticker: "BTC",
    category: "crypto",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    mint: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
    decimals: 8,
    ticker: "ETH",
    category: "crypto",
  },
];

// Pre-IPO
export const PRE_IPO: Asset[] = [
  {
    symbol: "xSPACEX",
    name: "SpaceX",
    mint: "SpaceXMintAddress111111111111111111111111111",
    decimals: 9,
    ticker: "SPACEX",
    category: "pre-ipo",
  },
  {
    symbol: "xSTRIPE",
    name: "Stripe",
    mint: "StripeMintAddress1111111111111111111111111111",
    decimals: 9,
    ticker: "STRIPE",
    category: "pre-ipo",
  },
  {
    symbol: "xOPENAI",
    name: "OpenAI",
    mint: "OpenAIMintAddress11111111111111111111111111111",
    decimals: 9,
    ticker: "OPENAI",
    category: "pre-ipo",
  },
];

// Indices
export const INDICES: Asset[] = [
  {
    symbol: "xSPY",
    name: "S&P 500 ETF",
    mint: "SPY500MintAddress111111111111111111111111111",
    decimals: 9,
    ticker: "SPY",
    category: "index",
  },
  {
    symbol: "xQQQ",
    name: "Nasdaq 100 ETF",
    mint: "QQQNasdaqMintAddress1111111111111111111111111",
    decimals: 9,
    ticker: "QQQ",
    category: "index",
  },
  {
    symbol: "xDIA",
    name: "Dow Jones ETF",
    mint: "DIADowJonesMintAddress11111111111111111111111",
    decimals: 9,
    ticker: "DIA",
    category: "index",
  },
];

// Commodities
export const COMMODITIES: Asset[] = [
  {
    symbol: "xGLD",
    name: "Gold",
    mint: "GoldMintAddress111111111111111111111111111111",
    decimals: 9,
    ticker: "GLD",
    category: "commodities",
  },
  {
    symbol: "xSLV",
    name: "Silver",
    mint: "SilverMintAddress1111111111111111111111111111",
    decimals: 9,
    ticker: "SLV",
    category: "commodities",
  },
];

// All assets combined
export const ALL_ASSETS: Asset[] = [
  ...STOCKS,
  ...CRYPTO,
  ...PRE_IPO,
  ...INDICES,
  ...COMMODITIES,
];

// Category labels
export const CATEGORY_LABELS: Record<AssetCategory, string> = {
  stocks: "US Stocks",
  crypto: "Crypto",
  "pre-ipo": "Pre-IPO",
  index: "Indices",
  commodities: "Commodities",
};

// Get assets by category
export function getAssetsByCategory(category: AssetCategory): Asset[] {
  return ALL_ASSETS.filter((asset) => asset.category === category);
}

// Get asset by mint
export function getAssetByMint(mint: string): Asset | undefined {
  return ALL_ASSETS.find((asset) => asset.mint === mint);
}

// Search assets
export function searchAssets(query: string): Asset[] {
  const q = query.toLowerCase();
  return ALL_ASSETS.filter(
    (asset) =>
      asset.symbol.toLowerCase().includes(q) ||
      asset.name.toLowerCase().includes(q) ||
      asset.ticker.toLowerCase().includes(q)
  );
}
