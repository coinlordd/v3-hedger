// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { ERC2771ContextStorage } from "./ERC2771ContextStorage.sol";
import { ERC2771ContextInternal } from "./ERC2771ContextInternal.sol";
import { IERC2771Context } from "./IERC2771Context.sol";

contract ERC2771Context is IERC2771Context, ERC2771ContextInternal {
    using ERC2771ContextStorage for ERC2771ContextStorage.Layout;

    function trustedForwarder() external view override returns (address) {
        return ERC2771ContextStorage.layout().trustedForwarder;
    }

    function isTrustedForwarder(address forwarder) public view virtual returns (bool) {
        return _isTrustedForwarder(forwarder);
    }
}
