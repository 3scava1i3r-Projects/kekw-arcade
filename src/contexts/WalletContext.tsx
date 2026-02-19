import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connect = () => {
    // Simulate wallet connection - in production, this would use MetaMask or other wallet
    const mockAddress = "0x" + Math.random().toString(16).slice(2, 10) + "..." + Math.random().toString(16).slice(2, 6);
    setWalletAddress(mockAddress);
    setIsConnected(true);
    toast.success("Wallet connected! 🔗");
  };

  const disconnect = () => {
    setWalletAddress(null);
    setIsConnected(false);
    toast.info("Wallet disconnected");
  };

  return (
    <WalletContext.Provider value={{ isConnected, walletAddress, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
