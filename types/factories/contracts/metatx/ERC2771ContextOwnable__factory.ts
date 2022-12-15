/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC2771ContextOwnable,
  ERC2771ContextOwnableInterface,
} from "../../../contracts/metatx/ERC2771ContextOwnable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
    ],
    name: "setTrustedForwarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610104908161001c8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c63da74222814602857600080fd5b3460f357602036600319011260f3576004356001600160a01b03818116929183900360ef577fa7222481f8aff9c0b8c2a969dffbd3c91ebd3e9fb5b7b31128200b05480e8ab35416330360ad57507f019ba45a7698f35665571a35d6bdeafc28bded06b4f8713bcdd23743873f3ebe80546001600160a01b0319169091179055604051f35b62461bcd60e51b815260206004820152601d60248201527f4f776e61626c653a2073656e646572206d757374206265206f776e65720000006044820152606490fd5b8380fd5b5080fdfea164736f6c6343000810000a";

type ERC2771ContextOwnableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC2771ContextOwnableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC2771ContextOwnable__factory extends ContractFactory {
  constructor(...args: ERC2771ContextOwnableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC2771ContextOwnable> {
    return super.deploy(overrides || {}) as Promise<ERC2771ContextOwnable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC2771ContextOwnable {
    return super.attach(address) as ERC2771ContextOwnable;
  }
  override connect(signer: Signer): ERC2771ContextOwnable__factory {
    return super.connect(signer) as ERC2771ContextOwnable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC2771ContextOwnableInterface {
    return new utils.Interface(_abi) as ERC2771ContextOwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC2771ContextOwnable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC2771ContextOwnable;
  }
}
