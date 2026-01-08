"use client";

import { useMemo } from "react";
import { Card, CardContent, Skeleton } from "@/components/ui";
import { useTokenBalances } from "@/hooks/useTokenBalances";
import { useTokenPrices } from "@/hooks/useTokenPrice";
import { XSTOCK_TOKENS } from "@/config/xstocks";
import { formatCurrency } from "@/lib/utils/format";

export function PortfolioSummary() {
  const { data: balances, isLoading: balancesLoading } = useTokenBalances();
  const xstockMints = useMemo(() => XSTOCK_TOKENS.map((t) => t.mint), []);
  const { data: prices, isLoading: pricesLoading } = useTokenPrices(xstockMints);

  const totalValue = useMemo(() => {
    if (!balances || !prices) return 0;

    return XSTOCK_TOKENS.reduce((total, token) => {
      const balance = balances[token.mint]?.uiAmount ?? 0;
      const price = prices[token.mint] ?? 0;
      return total + balance * price;
    }, 0);
  }, [balances, prices]);

  const holdingsCount = useMemo(() => {
    if (!balances) return 0;
    return XSTOCK_TOKENS.filter(
      (token) => (balances[token.mint]?.uiAmount ?? 0) > 0
    ).length;
  }, [balances]);

  const isLoading = balancesLoading || pricesLoading;

  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-surface-600 mb-1">Total Portfolio Value</p>
        {isLoading ? (
          <Skeleton className="h-10 w-40" />
        ) : (
          <p className="text-3xl font-bold">{formatCurrency(totalValue)}</p>
        )}
        <p className="text-sm text-surface-500 mt-2">
          {holdingsCount} xStock{holdingsCount !== 1 ? "s" : ""} held
        </p>
      </CardContent>
    </Card>
  );
}
