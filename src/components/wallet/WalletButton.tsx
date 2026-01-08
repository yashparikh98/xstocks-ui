"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui";
import { shortenAddress } from "@/lib/utils/format";
import { useState } from "react";
import { Web3AuthWalletName } from "@/lib/web3auth/Web3AuthWalletAdapter";

export function WalletButton() {
  const { connected, publicKey, disconnect, wallets, select, connect } = useWallet();
  const { setVisible } = useWalletModal();
  const [showOptions, setShowOptions] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const web3AuthWallet = wallets.find(w => w.adapter.name === Web3AuthWalletName);

  const handleSocialLogin = async () => {
    if (!web3AuthWallet) return;
    try {
      setIsConnecting(true);
      select(web3AuthWallet.adapter.name);
      await connect();
    } catch (error) {
      console.error("Social login error:", error);
    } finally {
      setIsConnecting(false);
      setShowOptions(false);
    }
  };

  if (connected && publicKey) {
    return (
      <Button variant="secondary" onClick={disconnect}>
        {shortenAddress(publicKey.toBase58())}
      </Button>
    );
  }

  if (showOptions) {
    return (
      <div className="flex flex-col gap-2 items-end">
        <div className="flex gap-2">
          {web3AuthWallet && (
            <Button
              variant="secondary"
              onClick={handleSocialLogin}
              disabled={isConnecting}
            >
              {isConnecting ? "..." : "Google / Email"}
            </Button>
          )}
          <Button variant="primary" onClick={() => { setVisible(true); setShowOptions(false); }}>
            Wallet
          </Button>
        </div>
        <button
          onClick={() => setShowOptions(false)}
          className="text-xs text-surface-400 hover:text-surface-300"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <Button variant="primary" onClick={() => setShowOptions(true)}>
      Connect
    </Button>
  );
}
