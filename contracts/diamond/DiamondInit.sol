// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

/******************************************************************************\
* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
/******************************************************************************/

import { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import { HedgerStorage } from "../hedger/HedgerStorage.sol";
import { HedgerInternal } from "../hedger//HedgerInternal.sol";
import { ERC2771ContextStorage } from "../metatx/ERC2771ContextStorage.sol";

contract DiamondInit {
    using HedgerStorage for HedgerStorage.Layout;
    using ERC2771ContextStorage for ERC2771ContextStorage.Layout;
    using SafeERC20 for IERC20;

    function init() external {
        address masterAgreement = 0x212e1A33350a85c4bdB2607C47E041a65bD14361;
        address collateral = 0xB62F2fb600D39A44883688DE20A8E058c76Ad558;
        HedgerInternal.addMasterAgreement(masterAgreement, collateral);

        address trustedForwarder = 0x4461377e03cD75bc5B9b3D5514318b10b05B76d1;
        ERC2771ContextStorage.layout().trustedForwarder = trustedForwarder;
    }
}
