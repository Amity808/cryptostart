// 'use client'
import { createWalletClient, createPublicClient, custom, http } from "viem";
import { zkSyncSepoliaTestnet } from "wagmi/chains"
import { eip712WalletActions } from "viem/zksync"
const [account] =
      typeof window !== "undefined" && window.ethereum
        ? await window.ethereum.request({ method: "eth_requestAccounts" }) // Request accounts if in a browser with Ethereum provider
        : [];
    // if (!account) {
    //   throw new Error("No account found. Please connect your wallet."); // Throw an error if no account is found
    // }
export const walletClient = typeof window !== 'undefined' && window.ethereum
  ? // If both conditions are true, create a wallet client using the provided Ethereum provider (window.ethereum)
    createWalletClient({
      account,
      chain: zkSyncSepoliaTestnet, // Specify the chain to connect to (zkSync Sepolia Testnet in this case)
      transport: custom(window?.ethereum), // Use a custom transport with the Ethereum provider
    }).extend(eip712WalletActions()) // Extend the client with additional EIP-712 wallet actions
  : // If either condition is false, set 'walletClient' to null
    null;
// Create a public client that can be used for read-only operations on the zkSync Sepolia Testnet
export const publicClient = createPublicClient({
  chain: zkSyncSepoliaTestnet, // Specify the chain to connect to (zkSync Sepolia Testnet in this case)
  transport: http() // Use HTTP transport for connecting to the chain
});
// 'use client'
// import { createPublicClient, createWalletClient, custom, http } from "viem";
// import { eip712WalletActions } from "viem/zksync";
// import { zkSyncSepoliaTestnet } from "wagmi/chains";
// etActions } from "viem/zksync";

// const account = await (async () => {
//   if (typeof window !== "undefined" && window.ethereum) {
//     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//     return accounts[0];
//   }
//   return null;
// })();

// if (!account) {
//   throw new Error("No account found. Please connect your wallet.");
// }

// let walletClient;

// if (typeof window !== "undefined" && window.ethereum) {
//   // First, create the wallet client
//   const baseWalletClient = createWalletClient({
//     account,
//     chain: zkSyncSepoliaTestnet,
//     transport: custom(window.ethereum),
//   });

//   // Check if the baseWalletClient is compatible with the eip712WalletActions
//   // You might need to adjust this condition based on the exact issue
//   if (baseWalletClient) {
//     walletClient = baseWalletClient.extend(eip712WalletActions());
//   } else {
//     console.error("The wallet client is not compatible with EIP-712 wallet actions.");
//     walletClient = baseWalletClient; // Or handle the error appropriately
//   }
// } else {
//   walletClient = null;
// }

// // Create a public client that can be used for read-only operations on the zkSync Sepolia Testnet
// export const publicClient = createPublicClient({
//   chain: zkSyncSepoliaTestnet,
//   transport: http(),
// });

// export { walletClient };
