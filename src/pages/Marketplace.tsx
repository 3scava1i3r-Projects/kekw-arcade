import { useState, useEffect } from "react";
import { mockNFTs, type NFTItem } from "@/data/mockData";
import NFTCard from "@/components/NFTCard";
import { useWallet } from "@/contexts/WalletContext";
import ConnectWalletPrompt from "@/components/ConnectWalletPrompt";

interface ImgflipMeme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

const generateRandomPrice = (): string => {
  const randomEth = (Math.random() * 0.5 + 0.01).toFixed(3);
  return `${randomEth} ETH`;
};

const categories = ["all", "memes", "classic", "rare", "legendary"];

const Marketplace = () => {
  const [filter, setFilter] = useState("all");
  const [memes, setMemes] = useState<NFTItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { isConnected } = useWallet();

  // useEffect must be called before any early returns (Rules of Hooks)
  useEffect(() => {
    // Only fetch when connected
    if (!isConnected) {
      setMemes([]);
      setLoading(false);
      return;
    }
    
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        
        if (data.success) {
          const memesWithPrices: NFTItem[] = data.data.memes.slice(0, 30).map((meme: ImgflipMeme) => ({
            id: meme.id,
            title: meme.name,
            creator: "Imgflip Community",
            price: generateRandomPrice(),
            image: meme.url,
            category: "classic",
            description: `A classic meme template - ${meme.box_count} text boxes`,
            comments: [],
          }));
          setMemes(memesWithPrices);
        }
      } catch (error) {
        console.error("Failed to fetch memes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemes();
  }, [isConnected]);

  // Early return AFTER all hooks (Rules of Hooks)
  if (!isConnected) {
    return (
      <main className="mx-auto min-h-screen max-w-6xl px-4 py-8">
        <h1 className="mb-6 text-center text-primary" style={{ fontSize: "18px" }}>
          Marketplace
        </h1>
        <ConnectWalletPrompt 
          title="Connect to Access Marketplace"
          message="Connect your wallet to browse and purchase memes on the KEKW marketplace."
        />
      </main>
    );
  }

  const filtered = filter === "all" 
    ? [...mockNFTs, ...memes] 
    : filter === "memes" 
      ? memes 
      : mockNFTs.filter((n) => n.category === filter);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-center text-primary" style={{ fontSize: "18px" }}>
        Marketplace
      </h1>

      {/* Filter */}
      <div className="mb-6 flex justify-center">
        <div className="nes-select" style={{ maxWidth: "200px" }}>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-8">
          <p className="text-primary" style={{ fontSize: "12px" }}>Loading memes...</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="nes-container is-dark mt-8 text-center">
          <p className="text-muted-foreground" style={{ fontSize: "10px" }}>
            No NFTs found in this category. Try another filter!
          </p>
        </div>
      )}
    </main>
  );
};

export default Marketplace;
