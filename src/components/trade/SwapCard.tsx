"use client";

import { useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Card, CardContent, Button } from "@/components/ui";
import { TokenInput } from "./TokenInput";
import { SwapDetails } from "./SwapDetails";
import { useSwapStore } from "@/stores/useSwapStore";
import { useTokenBalance } from "@/hooks/useTokenBalances";
import { useJupiterQuote } from "@/hooks/useJupiterQuote";
import { useJupiterSwap } from "@/hooks/useJupiterSwap";
import { ALL_ASSETS } from "@/config/assets";
import { BASE_TOKENS } from "@/config/tokens";

function getTokenByMint(mint: string) {
  return (
    BASE_TOKENS.find((t) => t.mint === mint) ||
    ALL_ASSETS.find((t) => t.mint === mint)
  );
}

export function SwapCard() {
  const { connected } = useWallet();
  const { setVisible } = useWalletModal();

  const {
    inputMint,
    outputMint,
    inputAmount,
    slippageBps,
    setInputMint,
    setOutputMint,
    setInputAmount,
    flipTokens,
  } = useSwapStore();

  const inputToken = getTokenByMint(inputMint);
  const inputBalance = useTokenBalance(inputMint);

  const {
    data: quote,
    isLoading: isQuoteLoading,
    error: quoteError,
  } = useJupiterQuote({
    inputMint,
    outputMint,
    amount: inputAmount,
    slippageBps,
    decimals: inputToken?.decimals ?? 9,
  });

  const { swap, status: swapStatus, error: swapError, reset } = useJupiterSwap();

  const outputAmount = useMemo(() => {
    if (!quote) return "";
    const outputToken = getTokenByMint(outputMint);
    const decimals = outputToken?.decimals ?? 9;
    return (Number(quote.outAmount) / Math.pow(10, decimals)).toString();
  }, [quote, outputMint]);

  const handleSwap = async () => {
    if (!quote || !inputToken) return;

    // Pass swap parameters - the hook will fetch a fresh quote
    const amountInSmallestUnit = Math.floor(
      parseFloat(inputAmount) * Math.pow(10, inputToken.decimals)
    );

    const txid = await swap({
      inputMint,
      outputMint,
      amount: amountInSmallestUnit,
      slippageBps,
    });

    if (txid) {
      setInputAmount("");
      setTimeout(reset, 3000);
    }
  };

  const isLoading = isQuoteLoading || swapStatus === "preparing" || swapStatus === "signing" || swapStatus === "confirming";
  const hasInsufficientBalance = parseFloat(inputAmount || "0") > inputBalance;

  const buttonText = useMemo(() => {
    if (!connected) return "Connect Wallet";
    if (swapStatus === "preparing") return "Preparing...";
    if (swapStatus === "signing") return "Confirm in Wallet...";
    if (swapStatus === "confirming") return "Confirming...";
    if (swapStatus === "success") return "Swap Successful!";
    if (swapStatus === "error") return "Swap Failed";
    if (!inputAmount || parseFloat(inputAmount) <= 0) return "Enter Amount";
    if (hasInsufficientBalance) return "Insufficient Balance";
    if (isQuoteLoading) return "Fetching Quote...";
    if (quoteError) return "Unable to Quote";
    return "Swap";
  }, [connected, swapStatus, inputAmount, hasInsufficientBalance, isQuoteLoading, quoteError]);

  const isButtonDisabled =
    !connected ||
    isLoading ||
    !inputAmount ||
    parseFloat(inputAmount) <= 0 ||
    hasInsufficientBalance ||
    !quote ||
    swapStatus === "success";

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="space-y-2">
          <TokenInput
            label="You Pay"
            mint={inputMint}
            amount={inputAmount}
            onMintChange={setInputMint}
            onAmountChange={setInputAmount}
            disabled={isLoading}
          />

          <div className="flex justify-center -my-1 relative z-10">
            <button
              onClick={flipTokens}
              disabled={isLoading}
              className="p-2 bg-white border border-surface-200 rounded-xl hover:bg-surface-50 transition-colors disabled:opacity-50"
            >
              <svg
                className="w-5 h-5 text-surface-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>

          <TokenInput
            label="You Receive"
            mint={outputMint}
            amount={outputAmount}
            onMintChange={setOutputMint}
            onAmountChange={() => {}}
            readOnly
            disabled={isLoading}
          />
        </div>

        <SwapDetails quote={quote ?? null} outputMint={outputMint} />

        {swapError && (
          <p className="mt-4 text-sm text-red-600 text-center">{swapError}</p>
        )}

        <Button
          className="w-full mt-6"
          size="lg"
          disabled={isButtonDisabled && connected}
          loading={isLoading}
          onClick={connected ? handleSwap : () => setVisible(true)}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
