"use client";

import dynamic from "next/dynamic";

const WalletButton = dynamic(
  () => import("./WalletButton").then((mod) => mod.WalletButton),
  { ssr: false }
);

export function WalletButtonWrapper() {
  return <WalletButton />;
}
