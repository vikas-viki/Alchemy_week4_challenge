const hre = require("hardhat");

const contract_address = "0x33Ca7B8aC89349f9E60226E79A57807FDD05880c";

async function main() {

    const contract = await hre.ethers.getContractAt("Winner", contract_address);

    const tx = await contract.callAttempt();
    await tx.wait();
    console.log(
        `mis matched tx.origin & msg.sender by calling attempt on behalf of 'Winner' contract successfully.`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
