// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { HedgerStorage } from "./HedgerStorage.sol";

library HedgerInternal {
    using HedgerStorage for HedgerStorage.Layout;

    function getMasterAgreement() internal view returns (address) {
        return HedgerStorage.layout().masteragreement;
    }
}
