import type { Metadata } from "next";
import { Providers } from "@/providers";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "xStocks - Trade Stocks, Crypto & More on Solana",
  description:
    "Trade tokenized US stocks, crypto, pre-IPO shares, indices, and commodities on Solana. 24/7 trading, instant settlement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface-50">
        <Providers>
          <Header />
          <main className="pb-20">{children}</main>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
