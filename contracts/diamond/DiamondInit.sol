// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

/******************************************************************************\
* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
/******************************************************************************/

import { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import { HedgerInternal } from "../hedger/HedgerInternal.sol";
import { ERC2771ContextStorage } from "../metatx/ERC2771ContextStorage.sol";

contract DiamondInit {
    using ERC2771ContextStorage for ERC2771ContextStorage.Layout;
    using SafeERC20 for IERC20;

    function init() external {
        address masterAgreement = 0x1570E893853897d806697F252300e32d99218fC2;
        address collateral = 0xDE1E704dae0B4051e80DAbB26ab6ad6c12262DA0;
        HedgerInternal.addMasterAgreement(masterAgreement, collateral);

        address trustedForwarder = 0x4461377e03cD75bc5B9b3D5514318b10b05B76d1;
        ERC2771ContextStorage.layout().trustedForwarder = trustedForwarder;
    }
}
