const hre = require("hardhat");


// 1. 0x2bE1B8099b801E5dEcfe955B814Df44af7001584
// 2. 0xD34C287677582224b7BE29DeEbbe0c6a0B7Fb949
// 3. 0x30639830fcfcb7bd2cA114fD3B862eBA4c4a230E
// 4. 0xd3F4c9262a08DC4f582418b3cdd12A10063E88D6
// 5. 0xCD9f30aD018944233eaBf03576C8d55BC20AEc22
// 6. 0x4CF5744CDd62bddc322Be3045F7bd337d65fbaDF
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
