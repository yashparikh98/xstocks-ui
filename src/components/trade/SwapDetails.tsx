"use client";

import type { QuoteResponse } from "@jup-ag/api";
import { ALL_ASSETS } from "@/config/assets";
import { BASE_TOKENS } from "@/config/tokens";
import { formatTokenAmount } from "@/lib/utils/format";

interface SwapDetailsProps {
  quote: QuoteResponse | null;
  outputMint: string;
}

function getTokenByMint(mint: string) {
  return (
    BASE_TOKENS.find((t) => t.mint === mint) ||
    ALL_ASSETS.find((t) => t.mint === mint)
  );
}

export function SwapDetails({ quote, outputMint }: SwapDetailsProps) {
  if (!quote) return null;

  const outputToken = getTokenByMint(outputMint);
  const outputDecimals = outputToken?.decimals ?? 9;

  const outputAmount =
    Number(quote.outAmount) / Math.pow(10, outputDecimals);
  const priceImpact = parseFloat(quote.priceImpactPct ?? "0");
  const minimumReceived =
    outputAmount * (1 - (quote.slippageBps ?? 100) / 10000);

  return (
    <div className="mt-4 p-4 bg-surface-50 rounded-xl text-sm space-y-2">
      <div className="flex justify-between">
        <span className="text-surface-600">Expected Output</span>
        <span className="font-medium">
          {formatTokenAmount(outputAmount)} {outputToken?.symbol}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-surface-600">Minimum Received</span>
        <span className="font-medium">
          {formatTokenAmount(minimumReceived)} {outputToken?.symbol}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-surface-600">Price Impact</span>
        <span
          className={`font-medium ${
            priceImpact > 1
              ? "text-red-600"
              : priceImpact > 0.5
              ? "text-yellow-600"
              : "text-green-600"
          }`}
        >
          {priceImpact.toFixed(2)}%
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-surface-600">Slippage Tolerance</span>
        <span className="font-medium">
          {(quote.slippageBps ?? 100) / 100}%
        </span>
      </div>
    </div>
  );
}
