export const diamondName = "V3HedgerDiamond";

export const coreFacetNames = ["DiamondCut", "DiamondLoupe", "ERC165", "Ownable"] as const;
export const appFacetNames = [
  "AccessControl",
  "AccessControlAdmin",
  "HedgerERC2771",
  "HedgerOwnable",
  "ERC2771Context",
  "ERC2771ContextOwnable",
];
export const allFacetNames = [...coreFacetNames, ...appFacetNames];
