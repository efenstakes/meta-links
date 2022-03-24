const hre = require("hardhat");


// 1. 0x2bE1B8099b801E5dEcfe955B814Df44af7001584
async function main() {
  const MetaLinks = await hre.ethers.getContractFactory("MetaLinks");
  const metaLinks = await MetaLinks.deploy();

  await metaLinks.deployed();

  console.log("MetaLinks deployed to:", metaLinks.address);
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
