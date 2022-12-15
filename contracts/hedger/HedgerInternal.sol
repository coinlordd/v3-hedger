// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { HedgerStorage } from "./HedgerStorage.sol";
import { IMasterAgreement } from "./IMasterAgreement.sol";
import { Errors } from "../utils/errors.sol";

library HedgerInternal {
    using HedgerStorage for HedgerStorage.Layout;

    function getMasterAgreement() internal view returns (address) {
        return HedgerStorage.layout().masterAgreement;
    }

    function getCollateral() internal view returns (address) {
        return HedgerStorage.layout().collateral;
    }

    function getMasterAgreementContract() internal view returns (IMasterAgreement) {
        return IMasterAgreement(getMasterAgreement());
    }

    function callMasterAgreement(bytes calldata data) internal {
        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory res) = HedgerInternal.getMasterAgreement().call{ value: msg.value }(data);
        if (!success) {
            revert(Errors.getRevertMsg(res));
        }
    }
}
