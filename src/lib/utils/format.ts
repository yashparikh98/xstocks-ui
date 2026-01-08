export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(value);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatTokenAmount(amount: number, decimals: number = 4): string {
  if (amount === 0) return "0";
  if (amount < 0.0001) return "<0.0001";
  return formatNumber(amount, {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
}

export function shortenAddress(address: string, chars: number = 4): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export function lamportsToSol(lamports: number | bigint): number {
  return Number(lamports) / 1e9;
}

export function solToLamports(sol: number): number {
  return Math.floor(sol * 1e9);
}
