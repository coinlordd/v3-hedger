// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { AccessControlInternal } from "../access/roles/AccessControlInternal.sol";
import { HedgerStorage } from "./HedgerStorage.sol";
import { HedgerInternal } from "./HedgerInternal.sol";

contract HedgerAdmin is AccessControlInternal {
    using HedgerStorage for HedgerStorage.Layout;

    event SetMasterAgreement(address indexed prev, address indexed next);

    function setMasterAgreement(address _masteragreement) internal onlyRole(ADMIN_ROLE) {
        emit SetMasterAgreement(HedgerInternal.getMasterAgreement(), _masteragreement);
        HedgerStorage.layout().masteragreement = _masteragreement;
    }
}
