import { createWalletClient, createPublicClient, custom, http } from "viem";
import { zkSyncSepoliaTestnet } from "wagmi/chains"
import { eip712WalletActions } from "viem/zksync"

export const walletClient = typeof window !== 'undefined' && window.ethereum
  ? // If both conditions are true, create a wallet client using the provided Ethereum provider (window.ethereum)
    createWalletClient({
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