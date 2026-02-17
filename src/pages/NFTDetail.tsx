import { useParams, Link } from "react-router-dom";
import { mockNFTs } from "@/data/mockData";
import { toast } from "sonner";

const NFTDetail = () => {
  const { id } = useParams();
  const nft = mockNFTs.find((n) => n.id === id);

  if (!nft) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="nes-container is-dark text-center">
          <p className="text-primary" style={{ fontSize: "12px" }}>NFT not found!</p>
          <Link to="/marketplace">
            <button className="nes-btn is-primary mt-4" style={{ fontSize: "10px" }}>
              Back to Market
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-8">
      <Link to="/marketplace">
        <button className="nes-btn is-success mb-6" style={{ fontSize: "10px" }}>
          ← Back
        </button>
      </Link>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Image */}
        <div>
          <img
            src={nft.image}
            alt={nft.title}
            className="w-full border-4 border-primary"
          />
        </div>

        {/* Info */}
        <div className="nes-container is-dark">
          <h1 className="mb-2 text-primary" style={{ fontSize: "14px" }}>
            {nft.title}
          </h1>
          <p className="mb-1 text-muted-foreground" style={{ fontSize: "10px" }}>
            Creator: {nft.creator}
          </p>
          <p className="mb-1 text-muted-foreground" style={{ fontSize: "10px" }}>
            Category:{" "}
            <span className="text-accent">
              {nft.category.charAt(0).toUpperCase() + nft.category.slice(1)}
            </span>
          </p>
          <p className="mb-4 text-accent" style={{ fontSize: "14px" }}>
            {nft.price}
          </p>
          <p className="mb-4 text-foreground" style={{ fontSize: "10px" }}>
            {nft.description}
          </p>
          <button
            className="nes-btn is-warning w-full"
            style={{ fontSize: "12px" }}
            onClick={() => toast.success("Purchase initiated! 🚀")}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Comments */}
      <section className="mt-8">
        <div className="nes-container is-dark with-title">
          <p className="title" style={{ fontSize: "10px" }}>Comments</p>
          {nft.comments.length === 0 ? (
            <p className="text-muted-foreground" style={{ fontSize: "10px" }}>
              No comments yet. Be the first! 🐸
            </p>
          ) : (
            <div className="space-y-3">
              {nft.comments.map((comment, i) => (
                <div key={i} className="border-b border-border pb-2">
                  <p className="text-primary" style={{ fontSize: "10px" }}>
                    {comment.user}
                  </p>
                  <p className="text-foreground" style={{ fontSize: "9px" }}>
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default NFTDetail;
