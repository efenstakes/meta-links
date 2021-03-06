const hre = require("hardhat");


// 1. 0x2bE1B8099b801E5dEcfe955B814Df44af7001584
// 2. 0xD34C287677582224b7BE29DeEbbe0c6a0B7Fb949
// 3. 0x30639830fcfcb7bd2cA114fD3B862eBA4c4a230E
// 4. 0xd3F4c9262a08DC4f582418b3cdd12A10063E88D6
// 5. 0xCD9f30aD018944233eaBf03576C8d55BC20AEc22
// 6. 0x4CF5744CDd62bddc322Be3045F7bd337d65fbaDF
// 7. 0x894510323238Be16dEbC8C7AF31A101258442671
// 8. 0xD9CF27cB1801D4009d8A3913AC83Df888a0EA91B
// 9. 0xB80008E9f4Fb02cE89E9a758bD0Cd5f6c46c7C3e
// 10. 0x693ed407803EFB19cedF600B911C142aBbFF4D9e
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
