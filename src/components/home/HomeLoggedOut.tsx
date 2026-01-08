"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button, Card } from "@/components/ui";
import { Web3AuthWalletName } from "@/lib/web3auth/Web3AuthWalletAdapter";
import { useState } from "react";

const features = [
  {
    icon: "📈",
    title: "US Stocks",
    description: "Trade Apple, Tesla, NVIDIA and more 24/7",
  },
  {
    icon: "₿",
    title: "Crypto",
    description: "Bitcoin, Ethereum, Solana with instant settlement",
  },
  {
    icon: "🚀",
    title: "Pre-IPO",
    description: "Access SpaceX, Stripe, OpenAI before they go public",
  },
  {
    icon: "📊",
    title: "Indices",
    description: "S&P 500, Nasdaq 100, Dow Jones exposure",
  },
  {
    icon: "🥇",
    title: "Commodities",
    description: "Gold, Silver and more precious metals",
  },
];

export function HomeLoggedOut() {
  const { setVisible } = useWalletModal();
  const { wallets, select, connect } = useWallet();
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
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-surface-900 mb-3">
          Invest in Everything
        </h1>
        <p className="text-surface-600">
          Trade tokenized stocks, crypto, and real-world assets on Solana.
          24/7 trading with instant settlement.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature) => (
          <Card key={feature.title} className="p-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-surface-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-surface-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        {web3AuthWallet && (
          <Button
            className="w-full"
            size="lg"
            onClick={handleSocialLogin}
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Continue with Google / Email"}
          </Button>
        )}
        <Button
          className="w-full"
          size="lg"
          variant={web3AuthWallet ? "secondary" : "primary"}
          onClick={() => setVisible(true)}
        >
          Connect Wallet
        </Button>
      </div>

      <p className="text-center text-xs text-surface-500 mt-4">
        Powered by Jupiter DEX on Solana
      </p>
    </div>
  );
}
