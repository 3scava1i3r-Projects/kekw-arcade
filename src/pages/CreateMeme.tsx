import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
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

const CreateMeme = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [memes, setMemes] = useState<ImgflipMeme[]>([]);
  const [showMemePicker, setShowMemePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { isConnected, connect } = useWallet();

  // useEffect must be called before any early returns (Rules of Hooks)
  useEffect(() => {
    // Only fetch when connected
    if (!isConnected) {
      setMemes([]);
      return;
    }
    
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        if (data.success) {
          setMemes(data.data.memes);
        }
      } catch (error) {
        console.error("Failed to fetch memes:", error);
      }
    };
    fetchMemes();
  }, [isConnected]);

  // Early return AFTER all hooks (Rules of Hooks)
  if (!isConnected) {
    return (
      <main className="mx-auto min-h-screen max-w-2xl px-4 py-8">
        <h1 className="mb-6 text-center text-primary" style={{ fontSize: "18px" }}>
          Create Meme
        </h1>
        <ConnectWalletPrompt 
          title="Connect to Create Memes"
          message="Connect your wallet to create and mint your own memes on the KEKW marketplace."
        />
      </main>
    );
  }

  const handleSelectMeme = (meme: ImgflipMeme) => {
    setImage(meme.url);
    setShowMemePicker(false);
    toast.success("Meme template selected! 🖼️");
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    toast.success("Meme saved! 🐸");
  };

  const handleMint = () => {
    toast.success("NFT minted! To the moon! 🚀");
  };

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-center text-primary" style={{ fontSize: "18px" }}>
        Create Meme
      </h1>

      <div className="nes-container is-dark mb-6">
        {/* Upload */}
        <div className="mb-4">
          <label className="mb-2 block text-xs text-primary">Upload Image</label>
          <div className="flex flex-wrap gap-2">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
            <button
              className="nes-btn is-primary"
              onClick={() => fileRef.current?.click()}
              style={{ fontSize: "10px" }}
            >
              Choose File
            </button>
            <button
              className="nes-btn is-success"
              onClick={() => setShowMemePicker(true)}
              style={{ fontSize: "10px" }}
            >
              Browse Memes
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="relative mb-4 flex min-h-[200px] items-center justify-center border-4 border-primary bg-secondary">
          {image ? (
            <div className="relative w-full">
              <img src={image} alt="Meme preview" className="w-full" />
              {topText && (
                <p
                  className="absolute left-0 right-0 top-2 text-center text-primary"
                  style={{
                    fontSize: "16px",
                    textShadow: "2px 2px 0 hsl(var(--background))",
                  }}
                >
                  {topText}
                </p>
              )}
              {bottomText && (
                <p
                  className="absolute bottom-2 left-0 right-0 text-center text-primary"
                  style={{
                    fontSize: "16px",
                    textShadow: "2px 2px 0 hsl(var(--background))",
                  }}
                >
                  {bottomText}
                </p>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground" style={{ fontSize: "10px" }}>
              Upload an image to start
            </p>
          )}
        </div>

        {/* Text inputs */}
        <div className="mb-4">
          <label className="mb-1 block text-muted-foreground" style={{ fontSize: "8px" }}>
            Top Text
          </label>
          <input
            type="text"
            className="nes-input w-full"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            placeholder="TOP TEXT"
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-muted-foreground" style={{ fontSize: "8px" }}>
            Bottom Text
          </label>
          <input
            type="text"
            className="nes-input w-full"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            placeholder="BOTTOM TEXT"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button className="nes-btn is-success" onClick={handleSave} style={{ fontSize: "10px" }}>
            Save Meme
          </button>
          <button className="nes-btn is-warning" onClick={handleMint} style={{ fontSize: "10px" }}>
            Mint as NFT
          </button>
        </div>
      </div>

      {/* Meme Picker Modal */}
      {showMemePicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="nes-container is-dark max-h-[80vh] w-full max-w-4xl overflow-auto">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-primary" style={{ fontSize: "14px" }}>
                Select Meme Template
              </h2>
              <button
                className="nes-btn is-error"
                onClick={() => setShowMemePicker(false)}
                style={{ fontSize: "10px" }}
              >
                Close
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {memes.map((meme) => (
                <button
                  key={meme.id}
                  onClick={() => handleSelectMeme(meme)}
                  className="overflow-hidden rounded border-2 border-primary transition-transform hover:scale-105"
                >
                  <img
                    src={meme.url}
                    alt={meme.name}
                    className="w-full"
                    loading="lazy"
                  />
                  <p
                    className="truncate bg-primary px-2 py-1 text-xs text-background"
                    style={{ fontSize: "8px" }}
                  >
                    {meme.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CreateMeme;
