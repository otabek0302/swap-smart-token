require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const ALCHEMY_URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.20" }
    ]
  },
  networks: {
    sepolia: {
      url: ALCHEMY_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};