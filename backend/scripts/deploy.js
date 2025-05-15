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

  const Factory = await ethers.getContractFactory("MiniSwapFactory");
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log("✅ MiniSwapFactory deployed at:", factory.address);

  const tx = await factory.createPair(aog.address, aos.address, 2);
  const receipt = await tx.wait();
  const event = receipt.events?.find(e => e.event === "PairCreated");
  const pairAddress = event?.args?.pair;

  console.log("✅ MiniSwap pair created at:", pairAddress);

  await aog.approve(pairAddress, ethers.constants.MaxUint256);
  await aos.approve(pairAddress, ethers.constants.MaxUint256);
  console.log("✅ Tokens approved!");
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});