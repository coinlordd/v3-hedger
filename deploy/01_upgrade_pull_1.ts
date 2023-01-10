import { HardhatRuntimeEnvironment } from "hardhat/types";

import { DiamondCut } from "../src/types";
import { FacetCutAction, getSelectors } from "../src/utils/diamondCut";

const UPGRADE_NAME = "01_upgrade_pull_1";
// const DIAMOND_ADDRESS = "0x5E124E4FBa6C2E7DbA992902882EBb15Dbb37937"; // testnet
const DIAMOND_ADDRESS = "0xCCFD0f473738B8BDC87b94cd45622Ddd9b00FE91"; // mainnet

const deploy = async function ({ deployments, getNamedAccounts, ethers }: HardhatRuntimeEnvironment) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Deploy new HedgerERC2771 / HedgerOwnable
  const HedgerERC2771 = await deploy("HedgerERC2771", { from: deployer });
  const HedgerOwnable = await deploy("HedgerOwnable", { from: deployer });
  console.log("Deployed: %o", {
    HedgerERC2771: HedgerERC2771.address,
    HedgerOwnable: HedgerOwnable.address,
  });

  const newHedgerERC2771 = await ethers.getContractAt("HedgerERC2771", HedgerERC2771.address);
  const newHedgerOwnable = await ethers.getContractAt("HedgerOwnable", HedgerOwnable.address);
  const oldHedgerERC2771 = await ethers.getContractAt(FORMER_HEDGER_ERC2771_ABI, DIAMOND_ADDRESS);
  const oldHedgerOwnable = await ethers.getContractAt(FORMER_HEDGER_OWNABLE_ABI, DIAMOND_ADDRESS);

  const facetCuts: Array<{
    facetAddress: string;
    action: FacetCutAction;
    functionSelectors: string[];
  }> = [];

  // Remove ALL from HedgerERC2771
  facetCuts.push({
    facetAddress: ethers.constants.AddressZero,
    action: FacetCutAction.Remove,
    functionSelectors: getSelectors(oldHedgerERC2771).selectors,
  });

  // Remove ALL from HedgerOwnable
  facetCuts.push({
    facetAddress: ethers.constants.AddressZero,
    action: FacetCutAction.Remove,
    functionSelectors: getSelectors(oldHedgerOwnable).selectors,
  });

  // Add ALL to HedgerERC2771
  let newSelectors = getSelectors(newHedgerERC2771).selectors;
  facetCuts.push({
    facetAddress: newHedgerERC2771.address,
    action: FacetCutAction.Add,
    functionSelectors: newSelectors,
  });

  // Add ALL to HedgerOwnable
  newSelectors = getSelectors(newHedgerOwnable).selectors;
  facetCuts.push({
    facetAddress: newHedgerOwnable.address,
    action: FacetCutAction.Add,
    functionSelectors: newSelectors,
  });

  // Get the DiamondCut
  const diamondCut = (await ethers.getContractAt("DiamondCut", DIAMOND_ADDRESS)) as DiamondCut;

  // Cut the facets
  const tx = await diamondCut.diamondCut(facetCuts, ethers.constants.AddressZero, "0x", {
    from: deployer,
    gasLimit: 8000000,
  });

  const receipt = await tx.wait();
  if (!receipt.status) {
    throw Error(`Diamond upgrade failed: ${tx.hash}`);
  }
  console.log("Diamond successfully upgraded: %o", receipt);
};

export default deploy;
deploy.tags = [UPGRADE_NAME];

const FORMER_HEDGER_ERC2771_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      { indexed: true, internalType: "bytes32", name: "previousAdminRole", type: "bytes32" },
      { indexed: true, internalType: "bytes32", name: "newAdminRole", type: "bytes32" },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      { indexed: true, internalType: "address", name: "account", type: "address" },
      { indexed: true, internalType: "address", name: "sender", type: "address" },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      { indexed: true, internalType: "address", name: "account", type: "address" },
      { indexed: true, internalType: "address", name: "sender", type: "address" },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "targetMasterAgreement", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "callMasterAgreementSigner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "positionId", type: "uint256" },
      { internalType: "uint256", name: "avgPriceUsd", type: "uint256" },
    ],
    name: "closePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "rfqId", type: "uint256" },
      { internalType: "uint256", name: "filledAmountUnits", type: "uint256" },
      { internalType: "uint256", name: "avgPriceUsd", type: "uint256" },
      { internalType: "bytes16", name: "uuid", type: "bytes16" },
    ],
    name: "openPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "positionId", type: "uint256" },
      { internalType: "bytes16", name: "uuid", type: "bytes16" },
    ],
    name: "updateUuid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const FORMER_HEDGER_OWNABLE_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "address", name: "collateral", type: "address" },
    ],
    name: "addMasterAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "allocate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "targetMasterAgreement", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "callMasterAgreementOwner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "deallocate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "deallocateAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "depositAndAllocate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "address", name: "collateral", type: "address" },
    ],
    name: "updateCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "masterAgreement", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { inputs: [], name: "withdrawETH", outputs: [], stateMutability: "nonpayable", type: "function" },
];
