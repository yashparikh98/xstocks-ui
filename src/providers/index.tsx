"use client";

import { SolanaProvider } from "./SolanaProvider";
import { QueryProvider } from "./QueryProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <SolanaProvider>{children}</SolanaProvider>
    </QueryProvider>
  );
}
