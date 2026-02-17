export interface NFTItem {
  id: string;
  title: string;
  creator: string;
  price: string;
  image: string;
  category: string;
  description: string;
  comments: { user: string; text: string }[];
}

export const mockNFTs: NFTItem[] = [
  {
    id: "1",
    title: "Pixel Pepe #42",
    creator: "MemeL0rd",
    price: "0.05 ETH",
    image: "https://picsum.photos/seed/nft1/300/300",
    category: "classic",
    description: "A rare pixel Pepe from the golden era of memes. One of only 42 in existence.",
    comments: [
      { user: "CryptoChad", text: "This is legendary!" },
      { user: "NFTKing", text: "Take my ETH!" },
    ],
  },
  {
    id: "2",
    title: "Dank Wizard",
    creator: "PixelMage",
    price: "0.12 ETH",
    image: "https://picsum.photos/seed/nft2/300/300",
    category: "rare",
    description: "The Dank Wizard grants +10 humor to all who behold it.",
    comments: [{ user: "MemeQueen", text: "So dank!" }],
  },
  {
    id: "3",
    title: "Moon Frog",
    creator: "RibbIT",
    price: "0.08 ETH",
    image: "https://picsum.photos/seed/nft3/300/300",
    category: "classic",
    description: "To the moon! This frog has seen things you wouldn't believe.",
    comments: [],
  },
  {
    id: "4",
    title: "Based Cat",
    creator: "CatCoin",
    price: "0.2 ETH",
    image: "https://picsum.photos/seed/nft4/300/300",
    category: "legendary",
    description: "The most based cat in the metaverse. Handle with care.",
    comments: [
      { user: "DogeLover", text: "Cats > Dogs confirmed" },
      { user: "Anon420", text: "Incredibly based" },
    ],
  },
  {
    id: "5",
    title: "Arcade Ape",
    creator: "RetroGamer",
    price: "0.15 ETH",
    image: "https://picsum.photos/seed/nft5/300/300",
    category: "rare",
    description: "This ape beat every high score in the arcade. Certified gamer.",
    comments: [{ user: "GameBoy", text: "GG no re" }],
  },
  {
    id: "6",
    title: "Cyber Shiba",
    creator: "DogeArmy",
    price: "0.03 ETH",
    image: "https://picsum.photos/seed/nft6/300/300",
    category: "classic",
    description: "Much pixel. Very NFT. Wow.",
    comments: [],
  },
];

export const userProfile = {
  name: "KekwMaster",
  avatar: "https://picsum.photos/seed/avatar/100/100",
  ownedNFTs: ["1", "3", "5"],
  createdMemes: ["2", "4"],
  wallet: "0x1234...abcd",
};
