import { useWallet } from "@/contexts/WalletContext";

interface ConnectWalletPromptProps {
  title?: string;
  message?: string;
}

const ConnectWalletPrompt = ({
  title = "Wallet Required",
  message = "Please connect your wallet to access this feature."
}: ConnectWalletPromptProps) => {
  const { connect, isConnected } = useWallet();

  if (isConnected) {
    return null;
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="nes-container is-dark max-w-md text-center">
        <div className="mb-4 text-4xl">🔗</div>
        <h2 className="mb-3 text-primary" style={{ fontSize: "16px" }}>
          {title}
        </h2>
        <p className="mb-6 text-muted-foreground" style={{ fontSize: "12px" }}>
          {message}
        </p>
        <button
          className="nes-btn is-warning w-full"
          style={{ fontSize: "12px" }}
          onClick={connect}
        >
          Connect Wallet
        </button>
        <p className="mt-4 text-muted-foreground" style={{ fontSize: "10px" }}>
          Connect your wallet to buy, sell, and create memes on the KEKW marketplace.
        </p>
      </div>
    </div>
  );
};

export default ConnectWalletPrompt;
