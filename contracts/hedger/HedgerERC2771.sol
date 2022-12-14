// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { AccessControlERC2771 } from "../access/roles/AccessControlERC2771.sol";
import { HedgerInternal } from "./HedgerInternal.sol";

contract HedgerERC2771 is AccessControlERC2771 {
    function fillRequestForQuote() external onlyRole(ADMIN_ROLE) {
        address masteragreement = HedgerInternal.getMasterAgreement();
        // some call here
    }
}
