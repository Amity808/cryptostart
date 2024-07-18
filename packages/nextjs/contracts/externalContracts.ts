import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    1: {
        StartPay: {
            address: "0x5055cC0C35258024b131a33dacC277fFf7a60f66",
            abi:  [
                {
                  "inputs": [
                    {
                      "internalType": "address",
                      "name": "",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "name": "_gifts",
                  "outputs": [
                    {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "internalType": "address payable",
                      "name": "gifter",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "link",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "content",
                      "type": "string"
                    }
                  ],
                  "stateMutability": "view",
                  "type": "function"
                },
                {
                  "inputs": [],
                  "name": "giftLen",
                  "outputs": [
                    {
                      "internalType": "uint256",
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "stateMutability": "view",
                  "type": "function"
                },
                {
                  "inputs": [
                    {
                      "internalType": "address",
                      "name": "_gifter",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "_link",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "_content",
                      "type": "string"
                    }
                  ],
                  "name": "giftUser",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
                }
              ]
        }
    }
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
