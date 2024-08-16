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
  300: {
    StartPay: {
      address: "0x5055cC0C35258024b131a33dacC277fFf7a60f66",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "_gifts",
          outputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address payable",
              name: "gifter",
              type: "address",
            },
            {
              internalType: "string",
              name: "link",
              type: "string",
            },
            {
              internalType: "string",
              name: "content",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "giftLen",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_gifter",
              type: "address",
            },
            {
              internalType: "string",
              name: "_link",
              type: "string",
            },
            {
              internalType: "string",
              name: "_content",
              type: "string",
            },
          ],
          name: "giftUser",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    GDAv1Forwarder: {
      address: "0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ISuperfluid",
              name: "host",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "address", name: "memberAddress", type: "address" },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "claimAll",
          outputs: [{ internalType: "bool", name: "success", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "connectPool",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "admin", type: "address" },
            {
              components: [
                {
                  internalType: "bool",
                  name: "transferabilityForUnitsOwner",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "distributionFromAnyAddress",
                  type: "bool",
                },
              ],
              internalType: "struct PoolConfig",
              name: "config",
              type: "tuple",
            },
          ],
          name: "createPool",
          outputs: [
            { internalType: "bool", name: "success", type: "bool" },
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "disconnectPool",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "requestedAmount",
              type: "uint256",
            },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "distribute",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "int96", name: "requestedFlowRate", type: "int96" },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "distributeFlow",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "requestedAmount",
              type: "uint256",
            },
          ],
          name: "estimateDistributionActualAmount",
          outputs: [{ internalType: "uint256", name: "actualAmount", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "to",
              type: "address",
            },
            { internalType: "int96", name: "requestedFlowRate", type: "int96" },
          ],
          name: "estimateFlowDistributionActualFlowRate",
          outputs: [
            { internalType: "int96", name: "actualFlowRate", type: "int96" },
            {
              internalType: "int96",
              name: "totalDistributionFlowRate",
              type: "int96",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "to",
              type: "address",
            },
          ],
          name: "getFlowDistributionFlowRate",
          outputs: [{ internalType: "int96", name: "", type: "int96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "getNetFlow",
          outputs: [{ internalType: "int96", name: "", type: "int96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
          ],
          name: "getPoolAdjustmentFlowInfo",
          outputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "bytes32", name: "", type: "bytes32" },
            { internalType: "int96", name: "", type: "int96" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pool", type: "address" }],
          name: "getPoolAdjustmentFlowRate",
          outputs: [{ internalType: "int96", name: "", type: "int96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "address", name: "member", type: "address" },
          ],
          name: "isMemberConnected",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "isPool",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "address", name: "memberAddress", type: "address" },
            { internalType: "uint128", name: "newUnits", type: "uint128" },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "updateMemberUnits",
          outputs: [{ internalType: "bool", name: "success", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
  2: {
    GDAv1Forwarder: {
      address: "0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ISuperfluid",
              name: "host",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "address", name: "memberAddress", type: "address" },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "claimAll",
          outputs: [{ internalType: "bool", name: "success", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "connectPool",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "admin", type: "address" },
            {
              components: [
                {
                  internalType: "bool",
                  name: "transferabilityForUnitsOwner",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "distributionFromAnyAddress",
                  type: "bool",
                },
              ],
              internalType: "struct PoolConfig",
              name: "config",
              type: "tuple",
            },
          ],
          name: "createPool",
          outputs: [
            { internalType: "bool", name: "success", type: "bool" },
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "disconnectPool",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "requestedAmount",
              type: "uint256",
            },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "distribute",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "int96", name: "requestedFlowRate", type: "int96" },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "distributeFlow",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "requestedAmount",
              type: "uint256",
            },
          ],
          name: "estimateDistributionActualAmount",
          outputs: [{ internalType: "uint256", name: "actualAmount", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "to",
              type: "address",
            },
            { internalType: "int96", name: "requestedFlowRate", type: "int96" },
          ],
          name: "estimateFlowDistributionActualFlowRate",
          outputs: [
            { internalType: "int96", name: "actualFlowRate", type: "int96" },
            {
              internalType: "int96",
              name: "totalDistributionFlowRate",
              type: "int96",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "from", type: "address" },
            {
              internalType: "contract ISuperfluidPool",
              name: "to",
              type: "address",
            },
          ],
          name: "getFlowDistributionFlowRate",
          outputs: [{ internalType: "int96", name: "", type: "int96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "getNetFlow",
          outputs: [{ internalType: "int96", name: "", type: "int96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
          ],
          name: "getPoolAdjustmentFlowInfo",
          outputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "bytes32", name: "", type: "bytes32" },
            { internalType: "int96", name: "", type: "int96" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pool", type: "address" }],
          name: "getPoolAdjustmentFlowRate",
          outputs: [{ internalType: "int96", name: "", type: "int96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "address", name: "member", type: "address" },
          ],
          name: "isMemberConnected",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidToken",
              name: "token",
              type: "address",
            },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "isPool",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ISuperfluidPool",
              name: "pool",
              type: "address",
            },
            { internalType: "address", name: "memberAddress", type: "address" },
            { internalType: "uint128", name: "newUnits", type: "uint128" },
            { internalType: "bytes", name: "userData", type: "bytes" },
          ],
          name: "updateMemberUnits",
          outputs: [{ internalType: "bool", name: "success", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
