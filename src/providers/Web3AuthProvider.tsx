"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import { Connection, PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";

const WEB3AUTH_CLIENT_ID = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "";

interface Web3AuthContextType {
  web3auth: Web3Auth | null;
  provider: IProvider | null;
  isLoading: boolean;
  isConnected: boolean;
  publicKey: PublicKey | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  signTransaction: <T extends Transaction | VersionedTransaction>(tx: T) => Promise<T>;
  signAllTransactions: <T extends Transaction | VersionedTransaction>(txs: T[]) => Promise<T[]>;
  signMessage: (message: Uint8Array) => Promise<Uint8Array>;
}

const Web3AuthContext = createContext<Web3AuthContextType>({
  web3auth: null,
  provider: null,
  isLoading: true,
  isConnected: false,
  publicKey: null,
  login: async () => {},
  logout: async () => {},
  signTransaction: async (tx) => tx,
  signAllTransactions: async (txs) => txs,
  signMessage: async () => new Uint8Array(),
});

export function useWeb3Auth() {
  return useContext(Web3AuthContext);
}

interface Web3AuthProviderProps {
  children: ReactNode;
}

export function Web3AuthProvider({ children }: Web3AuthProviderProps) {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);

  useEffect(() => {
    const init = async () => {
      if (!WEB3AUTH_CLIENT_ID) {
        console.warn("Web3Auth client ID not configured");
        setIsLoading(false);
        return;
      }

      try {
        const chainConfig = {
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId: "0x1",
          rpcTarget: process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com",
          displayName: "Solana Mainnet",
          blockExplorerUrl: "https://explorer.solana.com",
          ticker: "SOL",
          tickerName: "Solana",
        };

        const privateKeyProvider = new SolanaPrivateKeyProvider({
          config: { chainConfig },
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const web3authInstance = new Web3Auth({
          clientId: WEB3AUTH_CLIENT_ID,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
          privateKeyProvider: privateKeyProvider as any,
        });

        await web3authInstance.init();

        setWeb3auth(web3authInstance);

        if (web3authInstance.connected && web3authInstance.provider) {
          setProvider(web3authInstance.provider);
          const accounts = (await web3authInstance.provider.request({
            method: "getAccounts",
          })) as string[] | null;
          if (accounts && accounts.length > 0) {
            setPublicKey(new PublicKey(accounts[0]));
          }
        }
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  const login = useCallback(async () => {
    if (!web3auth) {
      console.error("Web3Auth not initialized");
      return;
    }

    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);

      if (web3authProvider) {
        const accounts = (await web3authProvider.request({
          method: "getAccounts",
        })) as string[] | null;
        if (accounts && accounts.length > 0) {
          setPublicKey(new PublicKey(accounts[0]));
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }, [web3auth]);

  const logout = useCallback(async () => {
    if (!web3auth) {
      console.error("Web3Auth not initialized");
      return;
    }

    try {
      await web3auth.logout();
      setProvider(null);
      setPublicKey(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }, [web3auth]);

  const signTransaction = useCallback(
    async <T extends Transaction | VersionedTransaction>(tx: T): Promise<T> => {
      if (!provider) {
        throw new Error("Provider not connected");
      }

      const message =
        tx instanceof VersionedTransaction
          ? tx.message.serialize()
          : tx.serializeMessage();

      const signature = (await provider.request({
        method: "signTransaction",
        params: { message },
      })) as Uint8Array | null;

      if (signature) {
        tx.addSignature(publicKey!, Buffer.from(signature));
      }

      return tx;
    },
    [provider, publicKey]
  );

  const signAllTransactions = useCallback(
    async <T extends Transaction | VersionedTransaction>(txs: T[]): Promise<T[]> => {
      return Promise.all(txs.map((tx) => signTransaction(tx)));
    },
    [signTransaction]
  );

  const signMessage = useCallback(
    async (message: Uint8Array): Promise<Uint8Array> => {
      if (!provider) {
        throw new Error("Provider not connected");
      }

      const signature = (await provider.request({
        method: "signMessage",
        params: { message },
      })) as Uint8Array | null;

      return signature || new Uint8Array();
    },
    [provider]
  );

  const value: Web3AuthContextType = {
    web3auth,
    provider,
    isLoading,
    isConnected: !!provider && !!publicKey,
    publicKey,
    login,
    logout,
    signTransaction,
    signAllTransactions,
    signMessage,
  };

  return (
    <Web3AuthContext.Provider value={value}>{children}</Web3AuthContext.Provider>
  );
}
