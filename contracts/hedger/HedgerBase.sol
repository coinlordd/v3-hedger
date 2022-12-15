// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { HedgerInternal } from "./HedgerInternal.sol";
import { Errors } from "../utils/errors.sol";

abstract contract HedgerBase {
    function _callMasterAgreement(bytes calldata data) internal {
        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory res) = HedgerInternal.getMasterAgreement().call{ value: msg.value }(data);
        if (!success) {
            revert(Errors.getRevertMsg(res));
        }
    }
}
