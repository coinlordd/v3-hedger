// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { IMasterAgreement } from "./IMasterAgreement.sol";
import { HedgerInternal } from "./HedgerInternal.sol";

contract Hedger {
    /* ========== ACCOUNTS - VIEWS ========== */

    function getAccountBalance(address masterAgreement) external view returns (uint256) {
        return getMasterAgreement(masterAgreement).getAccountBalance(address(this));
    }

    function getMarginBalance(address masterAgreement) external view returns (uint256) {
        return getMasterAgreement(masterAgreement).getMarginBalance(address(this));
    }

    function getLockedMarginIsolated(address masterAgreement, uint256 positionId) external view returns (uint256) {
        return getMasterAgreement(masterAgreement).getLockedMarginIsolated(address(this), positionId);
    }

    function getLockedMarginCross(address masterAgreement) external view returns (uint256) {
        return getMasterAgreement(masterAgreement).getLockedMarginCross(address(this));
    }

    function getLockedMarginReserved(address masterAgreement) external view returns (uint256) {
        return getMasterAgreement(masterAgreement).getLockedMarginReserved(address(this));
    }

    /* ========== CONFIG ========== */

    function isMasterAgreement(address masterAgreement) external view returns (bool) {
        return HedgerInternal.isMasterAgreement(masterAgreement);
    }

    function getCollateral(address masterAgreement) external view returns (address) {
        return HedgerInternal.getCollateral(masterAgreement);
    }

    /* ========== PRIVATE ========== */

    function getMasterAgreement(address masterAgreement) private pure returns (IMasterAgreement) {
        return IMasterAgreement(masterAgreement);
    }
}
