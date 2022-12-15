// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { IERC20, SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import { OwnableInternal } from "../access/ownable/OwnableInternal.sol";
import { HedgerStorage } from "./HedgerStorage.sol";
import { HedgerInternal } from "./HedgerInternal.sol";
import { HedgerBase } from "./HedgerBase.sol";

contract HedgerOwnable is OwnableInternal, HedgerBase {
    using SafeERC20 for IERC20;
    using HedgerStorage for HedgerStorage.Layout;

    event SetMasterAgreement(address indexed prev, address indexed next);
    event SetCollateral(address indexed prev, address indexed next);

    function callMasterAgreementOwner(bytes calldata data) external payable onlyOwner {
        _callMasterAgreement(data);
    }

    function withdrawETH() external onlyOwner {
        uint256 balance = address(this).balance;
        (bool success, ) = payable(_owner()).call{ value: balance }("");
        require(success, "Failed to send Ether");
    }

    function setMasterAgreement(address masteragreement) external onlyOwner {
        emit SetMasterAgreement(HedgerInternal.getMasterAgreement(), masteragreement);
        HedgerStorage.layout().masteragreement = masteragreement;
        _approve();
        _enlist();
    }

    function setCollateral(address collateral) external onlyOwner {
        emit SetCollateral(HedgerInternal.getCollateral(), collateral);
        HedgerStorage.layout().collateral = collateral;
        _approve();
    }

    function deposit(uint256 amount) external onlyOwner {
        HedgerInternal.getMasterAgreementContract().deposit(amount);
    }

    function withdraw(uint256 amount) external onlyOwner {
        HedgerInternal.getMasterAgreementContract().withdraw(amount);
    }

    function allocate(uint256 amount) external onlyOwner {
        HedgerInternal.getMasterAgreementContract().allocate(amount);
    }

    function deallocate(uint256 amount) external onlyOwner {
        HedgerInternal.getMasterAgreementContract().deallocate(amount);
    }

    function depositAndAllocate(uint256 amount) external onlyOwner {
        HedgerInternal.getMasterAgreementContract().depositAndAllocate(amount);
    }

    function deallocateAndWithdraw(uint256 amount) public onlyOwner {
        HedgerInternal.getMasterAgreementContract().deallocateAndWithdraw(amount);
    }

    /* ========== INTERNAL ========== */

    function _approve() private {
        IERC20(HedgerInternal.getCollateral()).safeApprove(HedgerInternal.getMasterAgreement(), type(uint256).max);
    }

    function _enlist() private {
        HedgerInternal.getMasterAgreementContract().enlist();
    }
}
