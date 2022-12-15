// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { AccessControlERC2771 } from "../access/roles/AccessControlERC2771.sol";
import { HedgerBase } from "./HedgerBase.sol";

contract HedgerERC2771 is HedgerBase, AccessControlERC2771 {
    function callMasterAgreementSigner(bytes calldata data) external payable onlyRole(SIGNER_ROLE) {
        _callMasterAgreement(data);
    }
}
