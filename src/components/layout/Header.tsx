"use client";

import Link from "next/link";
import { WalletButtonWrapper } from "@/components/wallet/WalletButtonWrapper";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-surface-200">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-600">
          xStocks
        </Link>
        <WalletButtonWrapper />
      </div>
    </header>
  );
}
