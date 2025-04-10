# 🪙 Cryptocurrency Exchange DApp

A decentralized application for swapping custom ERC-20 tokens (AOG ↔️ AOS) built with modern web3 technologies.

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cryptocurrency-exchange.git
cd cryptocurrency-exchange
```

2. Set up backend:
```bash
cd backend
npm install
npx hardhat compile
```

3. Set up frontend:
```bash
cd frontend
npm install
npm run dev
```

## 📚 Documentation

- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)

## 🛠️ Tech Stack

### Smart Contracts
- Solidity
- Hardhat
- OpenZeppelin
- Waffle

### Frontend
- Next.js
- Wagmi
- Viem
- RainbowKit
- TypeScript
- TailwindCSS

## 🌐 Live Demo

[Demo URL] (Coming Soon)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@fenixsystems.com or join our [Discord](https://discord.gg/your-discord) server.

## Author
- **Otabek Amonov**
- Email: otabekjon0302@gmail.com

## Project Structure
```
cryptocurrency-exchange/
├── backend/           # Smart contracts and deployment scripts
│   ├── contracts/    # Solidity smart contracts
│   ├── scripts/      # Deployment and utility scripts
│   └── test/         # Smart contract tests
└── frontend/         # React frontend application
```

## Smart Contracts
The project includes the following main smart contracts:
- `TokenSwap.sol`: Handles token swapping functionality
- `Exchange.sol`: Main exchange contract

## Deployment
To deploy the smart contracts:

1. Install dependencies:
```bash
cd backend
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Deploy contracts:
```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## Frontend
The frontend is built with React and provides a user-friendly interface for interacting with the smart contracts.