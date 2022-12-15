/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC165,
  ERC165Interface,
} from "../../../contracts/introspection/ERC165";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610015576095908161001b8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c6301ffc9a714602857600080fd5b34608457602036600319011260845760043563ffffffff60e01b811680910360805760408360ff92602095527f0a438a7a1f9a2584bc07ed93973b0247d34f9a1fc8d1966afb5667f23e00fcb0855220541615158152f35b8280fd5b5080fdfea164736f6c6343000810000a";

type ERC165ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC165ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC165__factory extends ContractFactory {
  constructor(...args: ERC165ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC165> {
    return super.deploy(overrides || {}) as Promise<ERC165>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC165 {
    return super.attach(address) as ERC165;
  }
  override connect(signer: Signer): ERC165__factory {
    return super.connect(signer) as ERC165__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC165Interface {
    return new utils.Interface(_abi) as ERC165Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC165 {
    return new Contract(address, _abi, signerOrProvider) as ERC165;
  }
}