"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, Input } from "@/components/ui";
import {
  ALL_ASSETS,
  STOCKS,
  CRYPTO,
  PRE_IPO,
  INDICES,
  CATEGORY_LABELS,
  searchAssets,
  type Asset,
  type AssetCategory,
} from "@/config/assets";
import { cn } from "@/lib/utils/cn";

const categories: { key: AssetCategory; label: string; icon: string }[] = [
  { key: "stocks", label: "US Stocks", icon: "📈" },
  { key: "crypto", label: "Crypto", icon: "₿" },
  { key: "pre-ipo", label: "Pre-IPO", icon: "🚀" },
  { key: "index", label: "Indices", icon: "📊" },
  { key: "commodities", label: "Commodities", icon: "🥇" },
];

// Trending assets (one from each interesting category)
const trendingAssets: Asset[] = [
  STOCKS[0], // NVDA
  PRE_IPO[0], // SpaceX
  INDICES[0], // SPY
].filter(Boolean);

function AssetRow({ asset }: { asset: Asset }) {
  return (
    <Link href={`/trade?asset=${asset.mint}`}>
      <div className="flex items-center justify-between py-3 px-4 hover:bg-surface-50 transition-colors border-b border-surface-100 last:border-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-sm font-bold">
            {asset.ticker.slice(0, 2)}
          </div>
          <div>
            <p className="font-medium">{asset.symbol}</p>
            <p className="text-sm text-surface-500">{asset.name}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">--</p>
          <p className="text-sm text-green-600">+0.00%</p>
        </div>
      </div>
    </Link>
  );
}

export default function InvestPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory | null>(null);

  const filteredAssets = useMemo(() => {
    if (search) {
      return searchAssets(search);
    }
    if (selectedCategory) {
      return ALL_ASSETS.filter((a) => a.category === selectedCategory);
    }
    return [];
  }, [search, selectedCategory]);

  const showResults = search || selectedCategory;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          placeholder="Search stocks, crypto, indices..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value) setSelectedCategory(null);
          }}
          className="text-base"
        />
      </div>

      {!showResults && (
        <>
          {/* Trending Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Trending</h2>
            <div className="grid grid-cols-3 gap-3">
              {trendingAssets.map((asset) => (
                <Link key={asset.mint} href={`/trade?asset=${asset.mint}`}>
                  <Card className="p-3 hover:border-primary-300 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-sm font-bold mb-2">
                        {asset.ticker.slice(0, 2)}
                      </div>
                      <p className="font-medium text-sm">{asset.symbol}</p>
                      <p className="text-xs text-surface-500 truncate w-full">
                        {asset.name}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Categories</h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setSearch("");
                  }}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-surface-200 hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="font-medium">{cat.label}</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-surface-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Recurring Buy */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Recurring Buy / DCA</p>
                  <p className="text-sm text-surface-600">
                    Set up automatic investments
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-surface-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Search/Category Results */}
      {showResults && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {search
                ? `Results for "${search}"`
                : CATEGORY_LABELS[selectedCategory!]}
            </h2>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory(null);
              }}
              className="text-sm text-primary-600"
            >
              Clear
            </button>
          </div>

          <Card>
            {filteredAssets.length > 0 ? (
              filteredAssets.map((asset) => (
                <AssetRow key={asset.mint} asset={asset} />
              ))
            ) : (
              <CardContent className="p-6 text-center">
                <p className="text-surface-500">No assets found</p>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
