const hre = require("hardhat");

async function main() {
  const { ethers } = hre;

  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const AOG = await ethers.getContractFactory("AOGToken");
  const aog = await AOG.deploy(ethers.utils.parseEther("10000000"));
  await aog.deployed();
  console.log("✅ AOG deployed at:", aog.address);

  const AOS = await ethers.getContractFactory("AOSToken");
  const aos = await AOS.deploy(ethers.utils.parseEther("10000000"));
  await aos.deployed();
  console.log("✅ AOS deployed at:", aos.address);

  const MiniSwap = await ethers.getContractFactory("MiniSwap");
  const swap = await MiniSwap.deploy(aog.address, aos.address, 2);
  await swap.deployed();
  console.log("✅ MiniSwap deployed at:", swap.address);

  await aog.approve(swap.address, ethers.constants.MaxUint256);
  await aos.approve(swap.address, ethers.constants.MaxUint256);
  console.log("✅ Tokens approved!");
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});