"use client";

import { useState, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useQueryClient } from "@tanstack/react-query";
import { VersionedTransaction } from "@solana/web3.js";
import { jupiterApi } from "@/lib/jupiter/client";
import type { QuoteResponse } from "@jup-ag/api";

type SwapStatus = "idle" | "preparing" | "signing" | "confirming" | "success" | "error";

interface SwapParams {
  inputMint: string;
  outputMint: string;
  amount: number; // In smallest unit (lamports)
  slippageBps: number;
}

interface UseJupiterSwapReturn {
  swap: (params: SwapParams) => Promise<string | null>;
  status: SwapStatus;
  error: string | null;
  reset: () => void;
}

export function useJupiterSwap(): UseJupiterSwapReturn {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const queryClient = useQueryClient();

  const [status, setStatus] = useState<SwapStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  const swap = useCallback(
    async (params: SwapParams): Promise<string | null> => {
      if (!publicKey || !signTransaction) {
        setError("Wallet not connected");
        setStatus("error");
        return null;
      }

      try {
        setStatus("preparing");
        setError(null);

        // Get a FRESH quote right before executing the swap
        // This ensures the blockhash in the transaction is not expired
        console.log("Fetching fresh quote...");
        const freshQuote = await jupiterApi.quoteGet({
          inputMint: params.inputMint,
          outputMint: params.outputMint,
          amount: params.amount,
          slippageBps: params.slippageBps,
        });

        if (!freshQuote) {
          throw new Error("Failed to get quote");
        }

        console.log("Got fresh quote, getting swap transaction...");

        // Get the swap transaction with the fresh quote
        const swapResponse = await jupiterApi.swapPost({
          swapRequest: {
            quoteResponse: freshQuote,
            userPublicKey: publicKey.toBase58(),
            dynamicComputeUnitLimit: true,
          },
        });

        const swapTransactionBuf = Buffer.from(
          swapResponse.swapTransaction,
          "base64"
        );
        const transaction = VersionedTransaction.deserialize(swapTransactionBuf);

        // Sign the transaction
        setStatus("signing");
        console.log("Requesting signature...");
        const signedTransaction = await signTransaction(transaction);

        // Send the transaction
        setStatus("confirming");
        console.log("Sending transaction...");
        const rawTransaction = signedTransaction.serialize();
        const txid = await connection.sendRawTransaction(rawTransaction, {
          skipPreflight: true,
          maxRetries: 2,
        });

        console.log("Transaction sent:", txid);

        // Confirm the transaction - use commitment level "confirmed"
        const latestBlockhash = await connection.getLatestBlockhash("confirmed");
        const confirmation = await connection.confirmTransaction(
          {
            signature: txid,
            blockhash: latestBlockhash.blockhash,
            lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
          },
          "confirmed"
        );

        if (confirmation.value.err) {
          throw new Error("Transaction failed on chain");
        }

        console.log("Transaction confirmed!");
        setStatus("success");

        // Invalidate balance queries to refresh
        queryClient.invalidateQueries({ queryKey: ["tokenBalances"] });

        return txid;
      } catch (err) {
        console.error("Swap failed:", err);
        const errorMessage = err instanceof Error ? err.message : "Swap failed";

        // Provide more helpful error messages
        if (errorMessage.includes("block height exceeded")) {
          setError("Transaction expired. Please try again.");
        } else if (errorMessage.includes("insufficient")) {
          setError("Insufficient balance for this swap.");
        } else {
          setError(errorMessage);
        }

        setStatus("error");
        return null;
      }
    },
    [publicKey, signTransaction, connection, queryClient]
  );

  return { swap, status, error, reset };
}
