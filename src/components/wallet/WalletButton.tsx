"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui";
import { shortenAddress } from "@/lib/utils/format";

export function WalletButton() {
  const { connected, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  if (connected && publicKey) {
    return (
      <Button variant="secondary" onClick={disconnect}>
        {shortenAddress(publicKey.toBase58())}
      </Button>
    );
  }

  return (
    <Button variant="primary" onClick={() => setVisible(true)}>
      Connect Wallet
    </Button>
  );
}
