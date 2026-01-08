"use client";

import { Card } from "@/components/ui";
import { formatTokenAmount, formatCurrency } from "@/lib/utils/format";
import type { XStockToken } from "@/types/token";

interface HoldingCardProps {
  token: XStockToken;
  balance: number;
  price: number | null;
}

export function HoldingCard({ token, balance, price }: HoldingCardProps) {
  const value = price ? balance * price : null;

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-200 flex items-center justify-center text-sm font-medium">
            {token.symbol.slice(1, 3)}
          </div>
          <div>
            <p className="font-medium">{token.symbol}</p>
            <p className="text-sm text-surface-600">{token.name}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium">{formatTokenAmount(balance)}</p>
          {value !== null && (
            <p className="text-sm text-surface-600">{formatCurrency(value)}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
