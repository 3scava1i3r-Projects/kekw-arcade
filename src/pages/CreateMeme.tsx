import { useState, useRef } from "react";
import { toast } from "sonner";

const CreateMeme = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

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
    </main>
  );
};

export default CreateMeme;
