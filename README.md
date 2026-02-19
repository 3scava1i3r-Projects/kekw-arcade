# KEKW Arcade 🐸

A meme NFT marketplace built with React, TypeScript, and modern web technologies. Buy, sell, and create meme NFTs on the KEKW marketplace.

![KEKW Arcade](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-purple)

## Features

- **Browse Marketplace** - Explore meme NFTs from the Imgflip API
- **Create Memes** - Upload or select meme templates and add your own text
- **Wallet Integration** - Connect your wallet to access marketplace features
- **Profile** - View your owned NFTs and created memes
- **NES-style UI** - Retro gaming aesthetic with pixel art design

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + shadcn-ui components
- **Routing**: React Router DOM
- **Notifications**: Sonner toast notifications
- **Testing**: Vitest

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd kekw-arcade

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn-ui components
│   ├── NFTCard.tsx     # NFT display card
│   ├── Navbar.tsx      # Navigation bar
│   └── ConnectWalletPrompt.tsx
├── contexts/           # React contexts
│   └── WalletContext.tsx
├── pages/              # Page components
│   ├── Marketplace.tsx # NFT marketplace
│   ├── CreateMeme.tsx  # Meme creator
│   ├── Profile.tsx     # User profile
│   └── Landing.tsx     # Landing page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── data/               # Mock data
```

## Wallet Integration

The app uses a mock wallet implementation for demonstration. In production, you would integrate with:

- MetaMask
- WalletConnect
- RainbowKit

## API Integration

- **Imgflip API** - Fetches popular meme templates for the marketplace and meme creator

## License

MIT
