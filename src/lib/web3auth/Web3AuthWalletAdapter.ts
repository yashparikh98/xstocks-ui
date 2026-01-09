import {
  BaseMessageSignerWalletAdapter,
  WalletName,
  WalletReadyState,
  WalletConnectionError,
  WalletDisconnectionError,
  WalletNotConnectedError,
  WalletSignTransactionError,
} from "@solana/wallet-adapter-base";
import { PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";
import { Web3Auth } from "@web3auth/modal";
import { IProvider, WEB3AUTH_NETWORK, CHAIN_NAMESPACES } from "@web3auth/base";
import { SolanaWallet, SolanaPrivateKeyProvider } from "@web3auth/solana-provider";

export const Web3AuthWalletName = "Web3Auth" as WalletName<"Web3Auth">;

export class Web3AuthWalletAdapter extends BaseMessageSignerWalletAdapter {
  name = Web3AuthWalletName;
  url = "https://web3auth.io";
  supportedTransactionVersions = new Set(["legacy", 0] as const);
  icon =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMDM2NEZGIi8+PHBhdGggZD0iTTIwIDEwQzE0LjQ3NyAxMCAxMCAxNC40NzcgMTAgMjBDMTAgMjUuNTIzIDE0LjQ3NyAzMCAyMCAzMEMyNS41MjMgMzAgMzAgMjUuNTIzIDMwIDIwQzMwIDE0LjQ3NyAyNS41MjMgMTAgMjAgMTBaTTIwIDI2QzE2LjY4NiAyNiAxNCAxMy4zMTQgMTQgMjBDMTQgMTYuNjg2IDE2LjY4NiAxNCAyMCAxNEMyMy4zMTQgMTQgMjYgMTYuNjg2IDI2IDIwQzI2IDIzLjMxNCAyMy4zMTQgMjYgMjAgMjZaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==";

  private _connecting: boolean = false;
  private _publicKey: PublicKey | null = null;
  private _web3auth: Web3Auth | null = null;
  private _provider: IProvider | null = null;
  private _solanaWallet: SolanaWallet | null = null;
  private _readyState: WalletReadyState = WalletReadyState.NotDetected;
  private _clientId: string;

  constructor(clientId: string) {
    super();
    this._clientId = clientId;

    if (typeof window !== "undefined") {
      this._readyState = clientId
        ? WalletReadyState.Loadable
        : WalletReadyState.NotDetected;
    }
  }

  get publicKey(): PublicKey | null {
    return this._publicKey;
  }

  get connecting(): boolean {
    return this._connecting;
  }

  get connected(): boolean {
    return !!this._publicKey;
  }

  get readyState(): WalletReadyState {
    return this._readyState;
  }

  async connect(): Promise<void> {
    try {
      if (this.connected || this.connecting) return;
      if (this._readyState !== WalletReadyState.Loadable) {
        throw new WalletConnectionError("Web3Auth not configured");
      }

      this._connecting = true;

      // Initialize Web3Auth if not already done
      if (!this._web3auth) {
        const chainConfig = {
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId: "0x1", // Solana Mainnet
          rpcTarget: "https://api.mainnet-beta.solana.com",
          displayName: "Solana Mainnet",
          blockExplorerUrl: "https://explorer.solana.com",
          ticker: "SOL",
          tickerName: "Solana",
        };

        const privateKeyProvider = new SolanaPrivateKeyProvider({
          config: { chainConfig },
        });

        this._web3auth = new Web3Auth({
          clientId: this._clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          privateKeyProvider: privateKeyProvider as any,
        });

        await this._web3auth.init();
      }

      // Connect - this opens the Web3Auth modal
      const provider = await this._web3auth.connect();
      if (!provider) {
        throw new WalletConnectionError("Failed to connect");
      }

      this._provider = provider;

      // Use SolanaWallet wrapper for v10
      this._solanaWallet = new SolanaWallet(provider);
      const accounts = await this._solanaWallet.requestAccounts();

      if (!accounts || accounts.length === 0) {
        throw new WalletConnectionError("No accounts found");
      }

      this._publicKey = new PublicKey(accounts[0]);
      this._readyState = WalletReadyState.Installed;

      this.emit("connect", this._publicKey);
    } catch (error: unknown) {
      const walletError = error instanceof WalletConnectionError
        ? error
        : new WalletConnectionError((error as Error).message);
      this.emit("error", walletError);
      throw walletError;
    } finally {
      this._connecting = false;
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this._web3auth) {
        await this._web3auth.logout();
      }
    } catch (error: unknown) {
      const walletError = new WalletDisconnectionError((error as Error).message);
      this.emit("error", walletError);
    } finally {
      this._publicKey = null;
      this._provider = null;
      this.emit("disconnect");
    }
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T
  ): Promise<T> {
    try {
      if (!this._solanaWallet || !this._publicKey) {
        throw new WalletNotConnectedError();
      }

      // Use SolanaWallet to sign
      const signedTx = await this._solanaWallet.signTransaction(transaction);
      return signedTx as T;
    } catch (error: unknown) {
      const walletError = error instanceof WalletSignTransactionError
        ? error
        : new WalletSignTransactionError((error as Error).message);
      this.emit("error", walletError);
      throw walletError;
    }
  }

  async signAllTransactions<T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ): Promise<T[]> {
    try {
      if (!this._solanaWallet || !this._publicKey) {
        throw new WalletNotConnectedError();
      }

      const signedTxs = await this._solanaWallet.signAllTransactions(transactions);
      return signedTxs as T[];
    } catch (error: unknown) {
      const walletError = error instanceof WalletSignTransactionError
        ? error
        : new WalletSignTransactionError((error as Error).message);
      this.emit("error", walletError);
      throw walletError;
    }
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    try {
      if (!this._solanaWallet || !this._publicKey) {
        throw new WalletNotConnectedError();
      }

      const signedMessage = await this._solanaWallet.signMessage(message);
      return signedMessage;
    } catch (error: unknown) {
      const walletError = error instanceof WalletSignTransactionError
        ? error
        : new WalletSignTransactionError((error as Error).message);
      this.emit("error", walletError);
      throw walletError;
    }
  }
}
