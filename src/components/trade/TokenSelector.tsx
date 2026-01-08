"use client";

import { useState, useMemo } from "react";
import { Modal, Input } from "@/components/ui";
import { ALL_ASSETS, CATEGORY_LABELS, type Asset } from "@/config/assets";
import { BASE_TOKENS } from "@/config/tokens";
import { useTokenBalances } from "@/hooks/useTokenBalances";
import { formatTokenAmount } from "@/lib/utils/format";
import type { Token } from "@/types/token";

interface TokenSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: Token | Asset) => void;
  selectedMint?: string;
  showBaseTokens?: boolean;
}

export function TokenSelector({
  isOpen,
  onClose,
  onSelect,
  selectedMint,
  showBaseTokens = true,
}: TokenSelectorProps) {
  const [search, setSearch] = useState("");
  const { data: balances } = useTokenBalances();

  const tokens = useMemo(() => {
    const allTokens = showBaseTokens
      ? [...BASE_TOKENS, ...ALL_ASSETS]
      : ALL_ASSETS;

    if (!search) return allTokens;

    const searchLower = search.toLowerCase();
    return allTokens.filter(
      (token) =>
        token.symbol.toLowerCase().includes(searchLower) ||
        token.name.toLowerCase().includes(searchLower)
    );
  }, [search, showBaseTokens]);

  const handleSelect = (token: Token | Asset) => {
    onSelect(token);
    onClose();
    setSearch("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Token">
      <div className="p-4">
        <Input
          placeholder="Search tokens..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />

        <div className="space-y-1 max-h-80 overflow-y-auto">
          {tokens.map((token) => {
            const balance = balances?.[token.mint]?.uiAmount ?? 0;
            const isSelected = token.mint === selectedMint;
            const category = "category" in token ? (token as Asset).category : null;

            return (
              <button
                key={token.mint}
                onClick={() => handleSelect(token)}
                disabled={isSelected}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                  isSelected
                    ? "bg-primary-50 cursor-default"
                    : "hover:bg-surface-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-200 flex items-center justify-center text-sm font-medium">
                    {token.symbol.slice(0, 2)}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{token.symbol}</p>
                    <p className="text-sm text-surface-600">
                      {token.name}
                      {category && (
                        <span className="text-xs text-surface-400 ml-1">
                          ({CATEGORY_LABELS[category]})
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                {balance > 0 && (
                  <span className="text-sm text-surface-600">
                    {formatTokenAmount(balance)}
                  </span>
                )}
              </button>
            );
          })}

          {tokens.length === 0 && (
            <p className="text-center text-surface-500 py-8">No tokens found</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
