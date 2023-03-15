const hre = require("hardhat");

async function main() {

  const Winner = await hre.ethers.getContractFactory("Winner");
  const winner = await Winner.deploy("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502");

  await winner.deployed();

  console.log(
    `contract was deployed to: ${winner.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
