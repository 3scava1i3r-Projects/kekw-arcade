import { useState } from "react";
import { mockNFTs } from "@/data/mockData";
import NFTCard from "@/components/NFTCard";

const categories = ["all", "classic", "rare", "legendary"];

const Marketplace = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? mockNFTs : mockNFTs.filter((n) => n.category === filter);

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
