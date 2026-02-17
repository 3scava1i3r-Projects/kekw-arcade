import { Link } from "react-router-dom";
import type { NFTItem } from "@/data/mockData";

interface NFTCardProps {
  nft: NFTItem;
}

const NFTCard = ({ nft }: NFTCardProps) => {
  return (
    <div className="nes-container is-dark animate-pixel-fade-in" style={{ padding: "12px" }}>
      <img
        src={nft.image}
        alt={nft.title}
        className="mb-3 w-full border-4 border-primary"
        style={{ imageRendering: "pixelated" }}
        loading="lazy"
      />
      <p className="mb-1 truncate text-xs text-primary" style={{ fontSize: "10px" }}>
        {nft.title}
      </p>
      <p className="mb-1 text-muted-foreground" style={{ fontSize: "8px" }}>
        by {nft.creator}
      </p>
      <p className="mb-3 text-accent" style={{ fontSize: "10px" }}>
        {nft.price}
      </p>
      <div className="flex gap-2">
        <Link to={`/nft/${nft.id}`} className="flex-1">
          <button className="nes-btn is-primary w-full" style={{ fontSize: "8px" }}>
            View
          </button>
        </Link>
        <button className="nes-btn is-warning flex-1" style={{ fontSize: "8px" }}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
