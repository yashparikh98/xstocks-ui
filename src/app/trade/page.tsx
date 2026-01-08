"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { SwapCard } from "@/components/trade/SwapCard";
import { useSwapStore } from "@/stores/useSwapStore";
import { getAssetByMint } from "@/config/assets";

function TradeContent() {
  const searchParams = useSearchParams();
  const assetMint = searchParams.get("asset");
  const { setOutputMint } = useSwapStore();

  useEffect(() => {
    if (assetMint) {
      const asset = getAssetByMint(assetMint);
      if (asset) {
        setOutputMint(assetMint);
      }
    }
  }, [assetMint, setOutputMint]);

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold">Trade</h1>
        <p className="text-surface-600 text-sm mt-1">
          Swap USDC for tokenized assets
        </p>
      </div>
      <SwapCard />
    </div>
  );
}

export default function TradePage() {
  return (
    <Suspense fallback={<div className="max-w-lg mx-auto px-4 py-6">Loading...</div>}>
      <TradeContent />
    </Suspense>
  );
}
