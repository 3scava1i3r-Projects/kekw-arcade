import { Link } from "react-router-dom";
import mascot from "@/assets/mascot.png";
import heroBanner from "@/assets/hero-banner.png";

const Landing = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center px-4 py-12 text-center">
        <img src={mascot} alt="Kekw Mascot" className="animate-float mb-6 h-24 w-24 sm:h-32 sm:w-32" />
        <h1 className="mb-4 text-primary" style={{ fontSize: "clamp(14px, 4vw, 24px)" }}>
          KEKW – Ain't That Funny
        </h1>
        <p className="mb-4 text-accent" style={{ fontSize: "clamp(10px, 2.5vw, 14px)" }}>
          Buy. Sell. Meme.<span className="animate-blink">_</span>
        </p>
        {/* YouTube Embed */}
        <div className="mb-8 w-full max-w-lg">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border-4 border-primary">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/mxpbwpU9HAo"
              title="KEKW Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/marketplace">
            <button className="nes-btn is-primary">Enter Marketplace</button>
          </Link>
          <Link to="/create">
            <button className="nes-btn is-warning">Create Meme</button>
          </Link>
        </div>
      </section>

      {/* Banner */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <img
            src={heroBanner}
            alt="NFT Collection Preview"
            className="w-full border-4 border-primary"
            loading="lazy"
          />
        </div>
      </section>

      {/* What is Kekw */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="nes-container is-dark with-title">
          <p className="title" style={{ fontSize: "12px" }}>What is KEKW?</p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <i className="nes-icon is-large star"></i>
              <p className="mt-2 text-primary" style={{ fontSize: "10px" }}>Create Memes</p>
              <p className="mt-1 text-muted-foreground" style={{ fontSize: "8px" }}>
                Upload images, add text, make dank art
              </p>
            </div>
            <div className="text-center">
              <i className="nes-icon is-large coin"></i>
              <p className="mt-2 text-primary" style={{ fontSize: "10px" }}>Mint NFTs</p>
              <p className="mt-1 text-muted-foreground" style={{ fontSize: "8px" }}>
                Turn your memes into tradeable NFTs
              </p>
            </div>
            <div className="text-center">
              <i className="nes-icon is-large trophy"></i>
              <p className="mt-2 text-primary" style={{ fontSize: "10px" }}>Trade & Collect</p>
              <p className="mt-1 text-muted-foreground" style={{ fontSize: "8px" }}>
                Buy, sell, and flex your collection
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
