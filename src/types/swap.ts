import type { QuoteResponse } from "@jup-ag/api";

export interface SwapState {
  inputToken: string | null;
  outputToken: string | null;
  inputAmount: string;
  slippageBps: number;
}

export interface SwapQuote extends QuoteResponse {
  priceImpactPct: string;
}

export type SwapStatus = "idle" | "quoting" | "swapping" | "success" | "error";
