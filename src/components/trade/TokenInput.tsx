"use client";

import { useState } from "react";
import { TokenSelector } from "./TokenSelector";
import { useTokenBalance } from "@/hooks/useTokenBalances";
import { formatTokenAmount } from "@/lib/utils/format";
import { ALL_ASSETS, type Asset } from "@/config/assets";
import { BASE_TOKENS } from "@/config/tokens";
import type { Token } from "@/types/token";

interface TokenInputProps {
  label: string;
  mint: string;
  amount: string;
  onMintChange: (mint: string) => void;
  onAmountChange: (amount: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
}

function getTokenByMint(mint: string): Token | Asset | undefined {
  return (
    BASE_TOKENS.find((t) => t.mint === mint) ||
    ALL_ASSETS.find((t) => t.mint === mint)
  );
}

export function TokenInput({
  label,
  mint,
  amount,
  onMintChange,
  onAmountChange,
  disabled = false,
  readOnly = false,
}: TokenInputProps) {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const balance = useTokenBalance(mint);
  const token = getTokenByMint(mint);

  const handleMaxClick = () => {
    if (balance > 0) {
      onAmountChange(balance.toString());
    }
  };

  const handleSelect = (selectedToken: Token | Asset) => {
    onMintChange(selectedToken.mint);
  };

  return (
    <div className="bg-surface-50 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-surface-600">{label}</span>
        {token && (
          <span className="text-sm text-surface-600">
            Balance: {formatTokenAmount(balance)}{" "}
            {!readOnly && (
              <button
                onClick={handleMaxClick}
                className="text-primary-600 hover:text-primary-700 font-medium"
                disabled={disabled}
              >
                MAX
              </button>
            )}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="0.00"
          disabled={disabled || readOnly}
          className="flex-1 bg-transparent text-2xl font-medium outline-none placeholder:text-surface-400 disabled:text-surface-600"
        />

        <button
          onClick={() => setSelectorOpen(true)}
          disabled={disabled}
          className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-surface-200 hover:bg-surface-50 transition-colors disabled:opacity-50"
        >
          <div className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center text-xs font-medium">
            {token?.symbol.slice(0, 2) ?? "??"}
          </div>
          <span className="font-medium">{token?.symbol ?? "Select"}</span>
          <svg
            className="w-4 h-4 text-surface-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <TokenSelector
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        onSelect={handleSelect}
        selectedMint={mint}
      />
    </div>
  );
}
