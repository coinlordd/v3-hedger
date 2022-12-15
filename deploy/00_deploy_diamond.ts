import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { coreFacetNames, appFacetNames } from "../src/config/constants";
import { FacetCutAction, getSelectors } from "../src/utils/diamondCut";

const deploy: DeployFunction = async function ({ getNamedAccounts, ethers }: HardhatRuntimeEnvironment) {
  const { deployer } = await getNamedAccounts();

  // Deploy CoreFacets -> DiamondCut / DiamondLoupe / ERC165 / Ownable
  const coreFacets: string[] = await Promise.all(
    coreFacetNames.map(async name => {
      const factory = await ethers.getContractFactory(name);
      const facet = await factory.deploy();
      await facet.deployed();
      await facet.deployTransaction.wait();
      console.log(`Core:${name} deployed: ${facet.address}`);
      return facet.address;
    }),
  );

  // Deploy AppFacets
  const appFacets: Array<{
    facetAddress: string;
    action: FacetCutAction;
    functionSelectors: string[];
  }> = await Promise.all(
    appFacetNames.map(async name => {
      const factory = await ethers.getContractFactory(name);
      const facet = await factory.deploy();
      await facet.deployed();
      console.log(`App:${name} deployed: ${facet.address}`);
      return {
        facetAddress: facet.address,
        action: FacetCutAction.Add,
        functionSelectors: getSelectors(facet).selectors,
      };
    }),
  );

  // Deploy Diamond
  const DiamondFactory = await ethers.getContractFactory("Diamond");
  const diamond = await DiamondFactory.deploy(deployer, coreFacets, appFacets, []);
  await diamond.deployed();
  console.log("Diamond deployed:", diamond.address);
};

export default deploy;
