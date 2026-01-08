(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/config/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const env = {
    SOLANA_RPC_URL: ("TURBOPACK compile-time value", "https://broken-solitary-meme.solana-mainnet.quiknode.pro/5f9aee0d3c7a616d84b7e0b45f66c95c3582051a/") || "https://api.mainnet-beta.solana.com",
    SOLANA_NETWORK: ("TURBOPACK compile-time value", "mainnet-beta") || "mainnet-beta",
    JUPITER_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_JUPITER_API_KEY || ""
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/web3auth/Web3AuthWalletAdapter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Web3AuthWalletAdapter",
    ()=>Web3AuthWalletAdapter,
    "Web3AuthWalletName",
    ()=>Web3AuthWalletName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-base/lib/esm/signer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-base/lib/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$modal$2f$dist$2f$lib$2e$esm$2f$packages$2f$modal$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@web3auth/modal/dist/lib.esm/packages/modal/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$modal$2f$dist$2f$lib$2e$esm$2f$packages$2f$modal$2f$src$2f$modalManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@web3auth/modal/dist/lib.esm/packages/modal/src/modalManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$base$2f$dist$2f$lib$2e$esm$2f$chain$2f$IChainInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@web3auth/base/dist/lib.esm/chain/IChainInterface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@web3auth/auth/dist/lib.esm/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$solana$2d$provider$2f$dist$2f$lib$2e$esm$2f$providers$2f$privateKeyProvider$2f$solanaPrivateKeyProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@web3auth/solana-provider/dist/lib.esm/providers/privateKeyProvider/solanaPrivateKeyProvider.js [app-client] (ecmascript)");
;
;
;
;
;
const Web3AuthWalletName = "Web3Auth";
class Web3AuthWalletAdapter extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMessageSignerWalletAdapter"] {
    name = Web3AuthWalletName;
    url = "https://web3auth.io";
    supportedTransactionVersions = new Set([
        "legacy",
        0
    ]);
    icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMDM2NEZGIi8+PHBhdGggZD0iTTIwIDEwQzE0LjQ3NyAxMCAxMCAxNC40NzcgMTAgMjBDMTAgMjUuNTIzIDE0LjQ3NyAzMCAyMCAzMEMyNS41MjMgMzAgMzAgMjUuNTIzIDMwIDIwQzMwIDE0LjQ3NyAyNS41MjMgMTAgMjAgMTBaTTIwIDI2QzE2LjY4NiAyNiAxNCAxMy4zMTQgMTQgMjBDMTQgMTYuNjg2IDE2LjY4NiAxNCAyMCAxNEMyMy4zMTQgMTQgMjYgMTYuNjg2IDI2IDIwQzI2IDIzLjMxNCAyMy4zMTQgMjYgMjAgMjZaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==";
    _connecting = false;
    _publicKey = null;
    _web3auth = null;
    _provider = null;
    _readyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].NotDetected;
    _clientId;
    constructor(clientId){
        super();
        this._clientId = clientId;
        if ("TURBOPACK compile-time truthy", 1) {
            this._readyState = clientId ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].Loadable : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].NotDetected;
        }
    }
    get publicKey() {
        return this._publicKey;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return !!this._publicKey;
    }
    get readyState() {
        return this._readyState;
    }
    async connect() {
        try {
            if (this.connected || this.connecting) return;
            if (this._readyState !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].Loadable) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectionError"]("Web3Auth not configured");
            }
            this._connecting = true;
            // Initialize Web3Auth if not already done
            if (!this._web3auth) {
                const chainConfig = {
                    chainNamespace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$base$2f$dist$2f$lib$2e$esm$2f$chain$2f$IChainInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN_NAMESPACES"].SOLANA,
                    chainId: "0x1",
                    rpcTarget: ("TURBOPACK compile-time value", "https://broken-solitary-meme.solana-mainnet.quiknode.pro/5f9aee0d3c7a616d84b7e0b45f66c95c3582051a/") || "https://api.mainnet-beta.solana.com",
                    displayName: "Solana Mainnet",
                    blockExplorerUrl: "https://explorer.solana.com",
                    ticker: "SOL",
                    tickerName: "Solana"
                };
                const privateKeyProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$solana$2d$provider$2f$dist$2f$lib$2e$esm$2f$providers$2f$privateKeyProvider$2f$solanaPrivateKeyProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaPrivateKeyProvider"]({
                    config: {
                        chainConfig
                    }
                });
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this._web3auth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$modal$2f$dist$2f$lib$2e$esm$2f$packages$2f$modal$2f$src$2f$modalManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Auth"]({
                    clientId: this._clientId,
                    web3AuthNetwork: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3auth$2f$auth$2f$dist$2f$lib$2e$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEB3AUTH_NETWORK"].SAPPHIRE_MAINNET,
                    privateKeyProvider: privateKeyProvider
                });
                await this._web3auth.init();
            }
            // Connect
            const provider = await this._web3auth.connect();
            if (!provider) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectionError"]("Failed to connect");
            }
            this._provider = provider;
            // Get accounts
            const accounts = await provider.request({
                method: "getAccounts"
            });
            if (!accounts || accounts.length === 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectionError"]("No accounts found");
            }
            this._publicKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](accounts[0]);
            this._readyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletReadyState"].Installed;
            this.emit("connect", this._publicKey);
        } catch (error) {
            const walletError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectionError"] ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletConnectionError"](error.message);
            this.emit("error", walletError);
            throw walletError;
        } finally{
            this._connecting = false;
        }
    }
    async disconnect() {
        try {
            if (this._web3auth) {
                await this._web3auth.logout();
            }
        } catch (error) {
            const walletError = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletDisconnectionError"](error.message);
            this.emit("error", walletError);
        } finally{
            this._publicKey = null;
            this._provider = null;
            this.emit("disconnect");
        }
    }
    async signTransaction(transaction) {
        try {
            if (!this._provider || !this._publicKey) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletNotConnectedError"]();
            }
            // Serialize the transaction message
            let message;
            if (transaction instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"]) {
                message = transaction.message.serialize();
            } else {
                message = transaction.serializeMessage();
            }
            // Sign with Web3Auth provider
            const signedMessage = await this._provider.request({
                method: "signTransaction",
                params: {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message).toString("base64")
                }
            });
            if (!signedMessage?.signature) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletSignTransactionError"]("Failed to sign transaction");
            }
            // Add signature to transaction
            const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(signedMessage.signature);
            if (transaction instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"]) {
                transaction.addSignature(this._publicKey, signature);
            } else {
                transaction.addSignature(this._publicKey, signature);
            }
            return transaction;
        } catch (error) {
            const walletError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletSignTransactionError"] ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletSignTransactionError"](error.message);
            this.emit("error", walletError);
            throw walletError;
        }
    }
    async signAllTransactions(transactions) {
        return Promise.all(transactions.map((tx)=>this.signTransaction(tx)));
    }
    async signMessage(message) {
        try {
            if (!this._provider || !this._publicKey) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletNotConnectedError"]();
            }
            const signedMessage = await this._provider.request({
                method: "signMessage",
                params: {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message).toString("base64")
                }
            });
            if (!signedMessage?.signature) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletSignTransactionError"]("Failed to sign message");
            }
            return new Uint8Array(signedMessage.signature);
        } catch (error) {
            const walletError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletSignTransactionError"] ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletSignTransactionError"](error.message);
            this.emit("error", walletError);
            throw walletError;
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/SolanaProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolanaProvider",
    ()=>SolanaProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$ConnectionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/ConnectionProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$WalletProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/WalletProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletModalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletModalProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$web3auth$2f$Web3AuthWalletAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/web3auth/Web3AuthWalletAdapter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const WEB3AUTH_CLIENT_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "";
function SolanaProvider({ children }) {
    _s();
    const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SolanaProvider.useMemo[endpoint]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].SOLANA_RPC_URL
    }["SolanaProvider.useMemo[endpoint]"], []);
    // Include Web3Auth alongside auto-detected wallets (Phantom, Solflare, etc.)
    const wallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SolanaProvider.useMemo[wallets]": ()=>{
            const adapters = [];
            // Only add Web3Auth if client ID is configured
            if (WEB3AUTH_CLIENT_ID) {
                adapters.push(new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$web3auth$2f$Web3AuthWalletAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3AuthWalletAdapter"](WEB3AUTH_CLIENT_ID));
            }
            return adapters;
        }
    }["SolanaProvider.useMemo[wallets]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$ConnectionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionProvider"], {
        endpoint: endpoint,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$WalletProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProvider"], {
            wallets: wallets,
            autoConnect: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletModalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletModalProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/providers/SolanaProvider.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/providers/SolanaProvider.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/providers/SolanaProvider.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(SolanaProvider, "RNaTq20PjYTGasfEtgZ8qKkPMD0=");
_c = SolanaProvider;
var _c;
__turbopack_context__.k.register(_c, "SolanaProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/QueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function QueryProvider({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 30 * 1000,
                        retry: 2,
                        refetchOnWindowFocus: false
                    }
                }
            })
    }["QueryProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/QueryProvider.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(QueryProvider, "9kC8AQRC9xttmy3nOEXDUUKeHyA=");
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$SolanaProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/SolanaProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$QueryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/QueryProvider.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$QueryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$SolanaProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/providers/index.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/providers/index.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wallet/WalletButtonWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletButtonWrapper",
    ()=>WalletButtonWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
const WalletMultiButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.WalletMultiButton), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = WalletMultiButton;
function WalletButtonWrapper() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {}, void 0, false, {
        fileName: "[project]/src/components/wallet/WalletButtonWrapper.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c1 = WalletButtonWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "WalletMultiButton");
__turbopack_context__.k.register(_c1, "WalletButtonWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallet$2f$WalletButtonWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wallet/WalletButtonWrapper.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-surface-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-lg mx-auto px-4 h-14 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-xl font-bold text-primary-600",
                    children: "xStocks"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallet$2f$WalletButtonWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletButtonWrapper"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/BottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const tabs = [
    {
        href: "/",
        label: "Home",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", active ? "text-primary-600" : "text-surface-500"),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/BottomNav.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BottomNav.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: "/invest",
        label: "Invest",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", active ? "text-primary-600" : "text-surface-500"),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/BottomNav.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BottomNav.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: "/ai-advisor",
        label: "AI Advisor",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", active ? "text-primary-600" : "text-surface-500"),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/BottomNav.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BottomNav.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }
];
function BottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-surface-200 pb-safe",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-around h-16 max-w-lg mx-auto",
            children: tabs.map((tab)=>{
                const isActive = pathname === tab.href;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: tab.href,
                    className: "flex flex-col items-center justify-center flex-1 h-full",
                    children: [
                        tab.icon(isActive),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs mt-1", isActive ? "text-primary-600 font-medium" : "text-surface-500"),
                            children: tab.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/BottomNav.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, this)
                    ]
                }, tab.href, true, {
                    fileName: "[project]/src/components/layout/BottomNav.tsx",
                    lineNumber: 76,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/layout/BottomNav.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/BottomNav.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(BottomNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_39fe236b._.js.map