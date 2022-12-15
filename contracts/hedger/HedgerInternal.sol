// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { HedgerStorage } from "./HedgerStorage.sol";
import { IMasterAgreement } from "./IMasterAgreement.sol";

library HedgerInternal {
    using HedgerStorage for HedgerStorage.Layout;

    function getMasterAgreement() internal view returns (address) {
        return HedgerStorage.layout().masteragreement;
    }

    function getCollateral() internal view returns (address) {
        return HedgerStorage.layout().collateral;
    }

    function getMasterAgreementContract() internal view returns (IMasterAgreement) {
        return IMasterAgreement(getMasterAgreement());
    }
}
