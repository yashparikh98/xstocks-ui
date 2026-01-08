"use client";

import { useMemo } from "react";
import { HoldingCard } from "./HoldingCard";
import { Skeleton } from "@/components/ui";
import { useTokenBalances } from "@/hooks/useTokenBalances";
import { useTokenPrices } from "@/hooks/useTokenPrice";
import { XSTOCK_TOKENS } from "@/config/xstocks";

export function HoldingsList() {
  const { data: balances, isLoading: balancesLoading } = useTokenBalances();
  const xstockMints = useMemo(() => XSTOCK_TOKENS.map((t) => t.mint), []);
  const { data: prices } = useTokenPrices(xstockMints);

  const holdings = useMemo(() => {
    if (!balances) return [];

    return XSTOCK_TOKENS.filter((token) => {
      const balance = balances[token.mint]?.uiAmount ?? 0;
      return balance > 0;
    }).map((token) => ({
      token,
      balance: balances[token.mint]?.uiAmount ?? 0,
      price: prices?.[token.mint] ?? null,
    }));
  }, [balances, prices]);

  if (balancesLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-20 rounded-2xl" />
        ))}
      </div>
    );
  }

  if (holdings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-surface-600">No xStock holdings found</p>
        <p className="text-sm text-surface-500 mt-1">
          Buy some xStocks to see them here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {holdings.map(({ token, balance, price }) => (
        <HoldingCard
          key={token.mint}
          token={token}
          balance={balance}
          price={price}
        />
      ))}
    </div>
  );
}
