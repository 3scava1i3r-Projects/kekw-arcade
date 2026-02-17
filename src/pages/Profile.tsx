import { mockNFTs, userProfile } from "@/data/mockData";
import NFTCard from "@/components/NFTCard";
import { toast } from "sonner";

const Profile = () => {
  const owned = mockNFTs.filter((n) => userProfile.ownedNFTs.includes(n.id));
  const created = mockNFTs.filter((n) => userProfile.createdMemes.includes(n.id));

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      {/* Profile Header */}
      <div className="nes-container is-dark mb-8 text-center">
        <img
          src={userProfile.avatar}
          alt="Avatar"
          className="mx-auto mb-3 h-16 w-16 border-4 border-primary"
          style={{ imageRendering: "pixelated" }}
        />
        <h1 className="mb-2 text-primary" style={{ fontSize: "14px" }}>
          {userProfile.name}
        </h1>
        <p className="mb-4 text-muted-foreground" style={{ fontSize: "10px" }}>
          {userProfile.wallet}
        </p>
        <button
          className="nes-btn is-warning"
          style={{ fontSize: "10px" }}
          onClick={() => toast.success("Wallet connected! 🔗")}
        >
          Connect Wallet
        </button>
      </div>

      {/* Owned NFTs */}
      <section className="mb-8">
        <h2 className="mb-4 text-primary" style={{ fontSize: "14px" }}>
          Owned NFTs
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {owned.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>

      {/* Created Memes */}
      <section>
        <h2 className="mb-4 text-primary" style={{ fontSize: "14px" }}>
          Created Memes
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {created.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Profile;
