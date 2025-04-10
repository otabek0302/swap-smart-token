# 🏗️ Cryptocurrency Exchange Backend

Smart contracts and deployment scripts for the decentralized token exchange platform.

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask wallet
- Infura API key
- Sepolia testnet ETH

## 🛠️ Tech Stack

- Solidity (v0.8.0+)
- Hardhat
- OpenZeppelin Contracts
- Ethers.js
- Waffle

## 📁 Project Structure

```
backend/
├── contracts/
│   ├── TokenSwap.sol      # Main swap contract
│   ├── AOGToken.sol       # AOG token contract
│   └── AOSToken.sol       # AOS token contract
├── scripts/
│   ├── deploy.js          # Deployment script
│   └── verify.js          # Contract verification script
├── test/
│   └── TokenSwap.test.js  # Test suite
└── hardhat.config.js      # Hardhat configuration
```

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Compile contracts:
```bash
npx hardhat compile
```

3. Run tests:
```bash
npx hardhat test
```

4. Deploy to Sepolia:
```bash
PRIVATE_KEY=your_private_key \
INFURA_API_KEY=your_infura_key \
npx hardhat run scripts/deploy.js --network sepolia
```

## 📝 Smart Contracts

### TokenSwap.sol
Main contract handling token swaps between AOG and AOS tokens.

Key functions:
- `swapAOGforAOS(uint256 amount)`: Swap AOG tokens for AOS
- `swapAOSforAOG(uint256 amount)`: Swap AOS tokens for AOG
- `setExchangeRate(uint256 rate)`: Update exchange rate (admin only)

### Token Contracts
- `AOGToken.sol`: ERC-20 implementation for AOG token
- `AOSToken.sol`: ERC-20 implementation for AOS token

## 🔒 Security

- Contracts are tested using Waffle
- OpenZeppelin's battle-tested contracts are used
- Access control implemented for admin functions
- Reentrancy protection in place

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
