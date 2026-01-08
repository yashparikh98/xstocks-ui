"use client";

import { useQuery } from "@tanstack/react-query";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { TOKEN_PROGRAM_ID, TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import type { TokenBalances } from "@/types/token";
import { SOL } from "@/config/tokens";

export function useTokenBalances() {
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet();

  return useQuery<TokenBalances>({
    queryKey: ["tokenBalances", publicKey?.toBase58(), connected],
    queryFn: async () => {
      if (!publicKey) return {};

      const balances: TokenBalances = {};

      try {
        // Get SOL balance
        const solBalance = await connection.getBalance(publicKey);
        balances[SOL.mint] = {
          mint: SOL.mint,
          amount: solBalance.toString(),
          uiAmount: solBalance / LAMPORTS_PER_SOL,
          decimals: 9,
        };

        // Get SPL token balances (original Token Program)
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          { programId: TOKEN_PROGRAM_ID }
        );

        for (const { account } of tokenAccounts.value) {
          const info = account.data.parsed.info;
          balances[info.mint] = {
            mint: info.mint,
            amount: info.tokenAmount.amount,
            uiAmount: info.tokenAmount.uiAmount ?? 0,
            decimals: info.tokenAmount.decimals,
          };
        }

        // Get Token-2022 balances (newer token program used by many xStocks)
        const token2022Accounts = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          { programId: TOKEN_2022_PROGRAM_ID }
        );

        for (const { account } of token2022Accounts.value) {
          const info = account.data.parsed.info;
          balances[info.mint] = {
            mint: info.mint,
            amount: info.tokenAmount.amount,
            uiAmount: info.tokenAmount.uiAmount ?? 0,
            decimals: info.tokenAmount.decimals,
          };
        }

      } catch (error) {
        console.error("Error fetching balances:", error);
      }

      return balances;
    },
    enabled: !!publicKey && connected,
    staleTime: 10000, // 10 seconds
    refetchInterval: 30000, // Refetch every 30 seconds
    refetchOnWindowFocus: true,
    retry: 3,
  });
}

export function useTokenBalance(mint: string) {
  const { data: balances } = useTokenBalances();
  return balances?.[mint]?.uiAmount ?? 0;
}
