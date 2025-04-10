const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const TokenSwap = await hre.ethers.getContractFactory("TokenSwap");
    
    // Deploy the contract with required parameters
    console.log("Deploying TokenSwap contract...");
    const tokenSwap = await TokenSwap.deploy(
        "YOUR_AOG_TOKEN_ADDRESS", // Replace with actual AOG token address
        "YOUR_AOS_TOKEN_ADDRESS", // Replace with actual AOS token address
        2 // Exchange rate: 1 AOG = 2 AOS
    );
    
    // Wait for deployment to complete
    await tokenSwap.deployed();
    
    console.log(`✅ TokenSwap deployed to: ${tokenSwap.address}`);
    
    // Verify the contract on Etherscan (if on a supported network)
    if (hre.network.name !== "hardhat") {
        console.log("Waiting for 5 block confirmations...");
        await tokenSwap.deployTransaction.wait(5);
        
        try {
            await hre.run("verify:verify", {
                address: tokenSwap.address,
                constructorArguments: [
                    "YOUR_AOG_TOKEN_ADDRESS",
                    "YOUR_AOS_TOKEN_ADDRESS",
                    2
                ],
            });
            console.log("Contract verified on Etherscan!");
        } catch (error) {
            console.error("Error verifying contract:", error.message);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });