import { create } from "zustand";
import { USDC } from "@/config/tokens";
import { STOCKS } from "@/config/assets";

interface SwapStore {
  inputMint: string;
  outputMint: string;
  inputAmount: string;
  slippageBps: number;
  setInputMint: (mint: string) => void;
  setOutputMint: (mint: string) => void;
  setInputAmount: (amount: string) => void;
  setSlippageBps: (bps: number) => void;
  flipTokens: () => void;
  reset: () => void;
}

export const useSwapStore = create<SwapStore>((set) => ({
  inputMint: USDC.mint,
  outputMint: STOCKS[0]?.mint || "",
  inputAmount: "",
  slippageBps: 100, // 1% default slippage

  setInputMint: (mint) => set({ inputMint: mint }),
  setOutputMint: (mint) => set({ outputMint: mint }),
  setInputAmount: (amount) => set({ inputAmount: amount }),
  setSlippageBps: (bps) => set({ slippageBps: bps }),

  flipTokens: () =>
    set((state) => ({
      inputMint: state.outputMint,
      outputMint: state.inputMint,
      inputAmount: "",
    })),

  reset: () =>
    set({
      inputMint: USDC.mint,
      outputMint: STOCKS[0]?.mint || "",
      inputAmount: "",
    }),
}));
