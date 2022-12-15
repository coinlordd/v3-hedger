/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  HedgerOwnable,
  HedgerOwnableInterface,
} from "../../../contracts/hedger/HedgerOwnable";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prev",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    name: "SetCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prev",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    name: "SetMasterAgreement",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "allocate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "callMasterAgreementOwner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deallocate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deallocateAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositAndAllocate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateral",
        type: "address",
      },
    ],
    name: "setCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masteragreement",
        type: "address",
      },
    ],
    name: "setMasterAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610c74908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081632e1a7d4d146100de575080636acf6771146100d55780636f6c441f146100cc578063783bdd5e146100c3578063886abef5146100ba57806390ca796b146100b1578063b6b55f25146100a8578063bea519bb1461009f578063ddabc862146100965763e086e5ec1461008e57600080fd5b61000e61065e565b5061000e6105e3565b5061000e610524565b5061000e6104a9565b5061000e61042e565b5061000e610390565b5061000e6102f3565b5061000e61025b565b5061000e61018f565b3461017a57806100ed3661017d565b600080516020610c28833981519152546001600160a01b039061011390821633146106f1565b600080516020610c488339815191525416803b1561017657602483926040519485938492632e1a7d4d60e01b845260048401525af18015610169575b61015a575b50604051f35b61016390610754565b81610154565b61017161085d565b61014f565b5050fd5b80fd5b602090600319011261000e5760043590565b50602036600319011261000e5767ffffffffffffffff60043581811161000e573660238201121561000e57806004013591821161000e57366024838301011161000e576000916024839260018060a01b036101fc81600080516020610c28833981519152541633146106f1565b600080516020610c48833981519152541692806040519384930183378101848152039134905af161022b6107de565b901561023357005b61023f61025791610b6f565b60405162461bcd60e51b815291829160048301610831565b0390fd5b503461000e5761026a3661017d565b6000809160018060a01b0361029181600080516020610c28833981519152541633146106f1565b600080516020610c488339815191525416803b1561017657602483926040519485938492636f6c441f60e01b845260048401525af180156102e6575b6102d75750604051f35b6102e090610754565b38610154565b6102ee61085d565b6102cd565b503461000e576103023661017d565b6000809160018060a01b0361032981600080516020610c28833981519152541633146106f1565b600080516020610c488339815191525416803b1561017657602483926040519485938492633c1deeaf60e11b845260048401525af180156102e6576102d75750604051f35b602090600319011261000e576004356001600160a01b038116810361000e5790565b503461000e5761039f3661036e565b600080516020610c28833981519152546001600160a01b03906103c590821633146106f1565b7f56864fc417ad9d57bfe3d7eb59ef81d3a7990ac33d9fb0584608b9f930c45b6d918183549116809282167fc014372ec26955520fec1ee7ca4daa1932b4516e76358e128bf235fa087a78f26000604051a36001600160a01b03191617905561042c61086a565b005b503461000e5761043d3661017d565b6000809160018060a01b0361046481600080516020610c28833981519152541633146106f1565b600080516020610c488339815191525416803b15610176576024839260405194859384926390ca796b60e01b845260048401525af180156102e6576102d75750604051f35b503461000e576104b83661017d565b6000809160018060a01b036104df81600080516020610c28833981519152541633146106f1565b600080516020610c488339815191525416803b156101765760248392604051948593849263b6b55f2560e01b845260048401525af180156102e6576102d75750604051f35b503461000e576105333661036e565b6000809160018060a01b039061055b82600080516020610c28833981519152541633146106f1565b600080516020610c4883398151915290828254911690818482167fe5768c42ca03b31b303bd4cee81524e8b9017c1486faf5a4b3b6afd3b5480ead87604051a36001600160a01b0319161781556105b061086a565b5416803b156105e0578190600460405180948193631a12048160e01b83525af180156102e6576102d75750604051f35b50fd5b503461000e576105f23661017d565b6000809160018060a01b0361061981600080516020610c28833981519152541633146106f1565b600080516020610c488339815191525416803b1561017657602483926040519485938492636ed5e43160e11b845260048401525af180156102e6576102d75750604051f35b503461000e5760008060031936011261017a57600080516020610c28833981519152548190819081906001600160a01b031661069b3382146106f1565b47604051915af16106aa6107de565b50156106b557604051f35b60405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b6044820152606490fd5b156106f857565b60405162461bcd60e51b815260206004820152601d60248201527f4f776e61626c653a2073656e646572206d757374206265206f776e65720000006044820152606490fd5b50634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161076857604052565b61077061073d565b604052565b6040810190811067ffffffffffffffff82111761076857604052565b90601f8019910116810190811067ffffffffffffffff82111761076857604052565b60209067ffffffffffffffff81116107d1575b601f01601f19160190565b6107d961073d565b6107c6565b3d15610809573d906107ef826107b3565b916107fd6040519384610791565b82523d6000602084013e565b606090565b60005b8381106108215750506000910152565b8181015183820152602001610811565b60409160208252610851815180928160208601526020868601910161080e565b601f01601f1916010190565b506040513d6000823e3d90fd5b7f56864fc417ad9d57bfe3d7eb59ef81d3a7990ac33d9fb0584608b9f930c45b6d54600080516020610c4883398151915254604051636eb1769f60e11b81523060048201526001600160a01b03918216602482018190526109399361092693169161093491906108f490602081604481885afa908115610969575b60009161093b575b5015610985565b60405163095ea7b360e01b60208201526001600160a01b03909116602482015260001960448201529283906064820190565b03601f198101845283610791565b6109f0565b565b61095c915060203d8111610962575b6109548183610791565b810190610976565b386108ed565b503d61094a565b61097161085d565b6108e5565b9081602091031261000e575190565b1561098c57565b60405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608490fd5b60018060a01b031690610a4f604051610a0881610775565b6020938482527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858301526000808587829751910182855af1610a496107de565b91610ade565b805180610a5d575b50505050565b81849181010312610ada578201519081159182150361017a5750610a8357808080610a57565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b5080fd5b91929015610b405750815115610af2575090565b3b15610afb5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015610b535750805190602001fd5b60405162461bcd60e51b81529081906102579060048301610831565b6044815110610bed5760048101518101906020816024840193031261000e5760248101519067ffffffffffffffff821161000e57018160438201121561000e576024810151610bbd816107b3565b92610bcb6040519485610791565b8184526044828401011161000e57610bea91604460208501910161080e565b90565b50604051610bfa81610775565b601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c7900000060208201529056fea7222481f8aff9c0b8c2a969dffbd3c91ebd3e9fb5b7b31128200b05480e8ab356864fc417ad9d57bfe3d7eb59ef81d3a7990ac33d9fb0584608b9f930c45b6ca164736f6c6343000810000a";

type HedgerOwnableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HedgerOwnableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HedgerOwnable__factory extends ContractFactory {
  constructor(...args: HedgerOwnableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HedgerOwnable> {
    return super.deploy(overrides || {}) as Promise<HedgerOwnable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HedgerOwnable {
    return super.attach(address) as HedgerOwnable;
  }
  override connect(signer: Signer): HedgerOwnable__factory {
    return super.connect(signer) as HedgerOwnable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HedgerOwnableInterface {
    return new utils.Interface(_abi) as HedgerOwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HedgerOwnable {
    return new Contract(address, _abi, signerOrProvider) as HedgerOwnable;
  }
}
