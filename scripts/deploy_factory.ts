import { ethers } from "hardhat";

async function main() {
  const UniswapV3Factory = await ethers.getContractFactory("UniswapV3Factory");
  const v3Factory = await UniswapV3Factory.deploy();

  await v3Factory.deployed();

  console.log(`deployed to ${v3Factory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});