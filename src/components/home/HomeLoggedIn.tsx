"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, Button, Skeleton } from "@/components/ui";
import { useTokenBalances } from "@/hooks/useTokenBalances";
import { useTokenPrices } from "@/hooks/useTokenPrice";
import {
  ALL_ASSETS,
  STOCKS,
  CRYPTO,
  PRE_IPO,
  INDICES,
  COMMODITIES,
  type Asset,
  type AssetCategory,
} from "@/config/assets";
import { USDC } from "@/config/tokens";
import { formatCurrency, formatTokenAmount } from "@/lib/utils/format";

interface CategorySectionProps {
  title: string;
  icon: string;
  assets: Asset[];
  balances: Record<string, { uiAmount: number }> | undefined;
  prices: Record<string, number> | undefined;
  description?: string;
}

function CategorySection({
  title,
  icon,
  assets,
  balances,
  prices,
  description,
}: CategorySectionProps) {
  const holdings = useMemo(() => {
    if (!balances) return [];
    return assets.filter((asset) => (balances[asset.mint]?.uiAmount ?? 0) > 0);
  }, [assets, balances]);

  const totalValue = useMemo(() => {
    if (!balances || !prices) return 0;
    return holdings.reduce((sum, asset) => {
      const balance = balances[asset.mint]?.uiAmount ?? 0;
      const price = prices[asset.mint] ?? 0;
      return sum + balance * price;
    }, 0);
  }, [holdings, balances, prices]);

  if (holdings.length === 0) return null;

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <h3 className="font-semibold">{title}</h3>
          </div>
          <span className="font-medium text-surface-700">
            {formatCurrency(totalValue)}
          </span>
        </div>
        {description && (
          <p className="text-xs text-surface-500 mb-3">{description}</p>
        )}
        <div className="space-y-2">
          {holdings.map((asset) => {
            const balance = balances?.[asset.mint]?.uiAmount ?? 0;
            const price = prices?.[asset.mint] ?? 0;
            const value = balance * price;

            return (
              <div
                key={asset.mint}
                className="flex items-center justify-between py-2 border-b border-surface-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-xs font-bold">
                    {asset.ticker.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{asset.symbol}</p>
                    <p className="text-xs text-surface-500">{asset.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">
                    {formatTokenAmount(balance)}
                  </p>
                  <p className="text-xs text-surface-500">
                    {formatCurrency(value)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function HomeLoggedIn() {
  const { data: balances, isLoading: balancesLoading, refetch } = useTokenBalances();

  // Include SOL in price fetches along with all assets
  const allMints = useMemo(() => {
    const mints = ALL_ASSETS.map((a) => a.mint);
    mints.push("So11111111111111111111111111111111111111112");
    return mints;
  }, []);

  const { data: prices, isLoading: pricesLoading } = useTokenPrices(allMints);

  const totalPortfolioValue = useMemo(() => {
    if (!balances || !prices) return 0;

    let total = ALL_ASSETS.reduce((sum, asset) => {
      const balance = balances[asset.mint]?.uiAmount ?? 0;
      const price = prices[asset.mint] ?? 0;
      return sum + balance * price;
    }, 0);

    // Add SOL value
    const solMint = "So11111111111111111111111111111111111111112";
    const solBalance = balances[solMint]?.uiAmount ?? 0;
    const solPrice = prices[solMint] ?? 0;
    total += solBalance * solPrice;

    return total;
  }, [balances, prices]);

  const cashBalance = useMemo(() => {
    return balances?.[USDC.mint]?.uiAmount ?? 0;
  }, [balances]);

  const isLoading = balancesLoading || pricesLoading;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Portfolio Summary */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm text-surface-600">Total Portfolio Value</p>
            <button
              onClick={() => refetch()}
              disabled={balancesLoading}
              className="text-xs text-brand-600 hover:text-brand-700 disabled:opacity-50 p-2"
              type="button"
            >
              {balancesLoading ? "Refreshing..." : "↻ Refresh"}
            </button>
          </div>
          {isLoading ? (
            <Skeleton className="h-10 w-40 mb-2" />
          ) : (
            <p className="text-3xl font-bold mb-2">
              {formatCurrency(totalPortfolioValue + cashBalance)}
            </p>
          )}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 font-medium">+$0.00</span>
            <span className="text-surface-500">(0.00%) today</span>
          </div>
        </CardContent>
      </Card>

      {/* Category Sections */}
      <CategorySection
        title="US Stocks"
        icon="📈"
        assets={STOCKS}
        balances={balances}
        prices={prices}
      />

      <CategorySection
        title="Crypto"
        icon="₿"
        assets={CRYPTO}
        balances={balances}
        prices={prices}
      />

      <CategorySection
        title="Pre-IPO"
        icon="🚀"
        assets={PRE_IPO}
        balances={balances}
        prices={prices}
        description="These tokens are backed by SPVs holding equity in private companies"
      />

      <CategorySection
        title="Commodities"
        icon="🥇"
        assets={COMMODITIES}
        balances={balances}
        prices={prices}
      />

      <CategorySection
        title="Indices"
        icon="📊"
        assets={INDICES}
        balances={balances}
        prices={prices}
      />

      {/* Cash Balance */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold">$</span>
              </div>
              <div>
                <p className="font-semibold">Cash Balance</p>
                <p className="text-sm text-surface-600">USDC</p>
              </div>
            </div>
            <div className="text-right">
              {isLoading ? (
                <Skeleton className="h-6 w-20" />
              ) : (
                <p className="font-bold text-lg">
                  {formatCurrency(cashBalance)}
                </p>
              )}
            </div>
          </div>
          <Link href="/invest">
            <Button className="w-full mt-4" variant="primary">
              Deposit
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Empty State */}
      {!isLoading && totalPortfolioValue === 0 && cashBalance === 0 && (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-surface-600 mb-4">
              No holdings yet. Start investing to build your portfolio.
            </p>
            <Link href="/invest">
              <Button>Start Investing</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
