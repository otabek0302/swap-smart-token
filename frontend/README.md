# 🌐 Cryptocurrency Exchange Frontend

Modern web3 frontend for the decentralized token exchange platform.

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask or any Web3 wallet

## 🛠️ Tech Stack

- Next.js
- React
- Wagmi
- Viem
- RainbowKit
- TailwindCSS
- TypeScript

## 📁 Project Structure

```
frontend/
├── components/
│   ├── WalletConnectButton.tsx  # Wallet connection component
│   ├── SwapForm.tsx             # Token swap interface
│   └── TokenBalance.tsx         # Token balance display
├── pages/
│   ├── index.tsx                # Main swap page
│   └── _app.tsx                 # App wrapper
├── styles/
│   └── globals.css              # Global styles
└── utils/
    └── contracts.ts             # Contract ABIs and addresses
```

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```env
NEXT_PUBLIC_INFURA_ID=your_infura_id
NEXT_PUBLIC_TOKEN_SWAP_ADDRESS=your_contract_address
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Features

- 🔗 Wallet connection (MetaMask, WalletConnect, Coinbase)
- 💱 Token swapping interface
- 📊 Real-time token balances
- 🎯 Transaction status tracking
- 🌙 Dark/Light mode support

## 🛠️ Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

### Environment Variables

Required environment variables:
- `NEXT_PUBLIC_INFURA_ID`: Infura project ID
- `NEXT_PUBLIC_TOKEN_SWAP_ADDRESS`: TokenSwap contract address

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop
- Tablet
- Mobile devices

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
