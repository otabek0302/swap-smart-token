const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Exchange = await hre.ethers.getContractFactory("Exchange");
  
  // Deploy the contract
  console.log("Deploying Exchange contract...");
  const exchange = await Exchange.deploy();
  
  // Wait for deployment to complete
  await exchange.deployed();
  
  console.log("Exchange contract deployed to:", exchange.address);
  
  // Verify the contract on Etherscan (if on a supported network)
  if (hre.network.name !== "hardhat") {
    console.log("Waiting for 5 block confirmations...");
    await exchange.deployTransaction.wait(5);
    
    try {
      await hre.run("verify:verify", {
        address: exchange.address,
        constructorArguments: [],
      });
      console.log("Contract verified on Etherscan!");
    } catch (error) {
      console.error("Error verifying contract:", error.message);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });