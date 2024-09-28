const hre = require("hardhat");

async function main() {

  //CONTRACT
  const CrowdFunding = await hre.ethers.deployContract("CrowdFunding");
  await CrowdFunding.waitForDeployment();


  console.log(` CROWDFUNDING: ${CrowdFunding.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});