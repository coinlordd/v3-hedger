/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface HedgerERC2771Interface extends utils.Interface {
  functions: {
    "callMasterAgreementSigner(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "callMasterAgreementSigner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "callMasterAgreementSigner",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "callMasterAgreementSigner",
    data: BytesLike
  ): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface HedgerERC2771 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HedgerERC2771Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    callMasterAgreementSigner(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  callMasterAgreementSigner(
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    callMasterAgreementSigner(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    callMasterAgreementSigner(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callMasterAgreementSigner(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
