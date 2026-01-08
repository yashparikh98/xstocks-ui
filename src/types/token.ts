export interface Token {
  symbol: string;
  name: string;
  mint: string;
  decimals: number;
  logoURI?: string;
}

export interface XStockToken extends Token {
  underlyingTicker: string;
}

export interface TokenBalance {
  mint: string;
  amount: string;
  uiAmount: number;
  decimals: number;
}

export type TokenBalances = Record<string, TokenBalance>;
