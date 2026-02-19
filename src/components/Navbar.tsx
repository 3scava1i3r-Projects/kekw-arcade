import { Link, useLocation } from "react-router-dom";
import mascot from "@/assets/mascot.png";
import { useWallet } from "@/contexts/WalletContext";

const Navbar = () => {
  const location = useLocation();
  const { isConnected, walletAddress, connect, disconnect } = useWallet();

  const links = [
    { to: "/", label: "Home" },
    { to: "/marketplace", label: "Market" },
    { to: "/create", label: "Create" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-primary bg-card px-4 py-3">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🐸</span>
          <span className="hidden text-xs text-primary sm:inline">KEKW</span>
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {/* Wallet Status */}
          {isConnected ? (
            <button
              onClick={disconnect}
              className="nes-btn is-error"
              style={{ fontSize: "10px" }}
              title={walletAddress || "Connected"}
            >
              🔗 {walletAddress?.slice(0, 6)}...
            </button>
          ) : (
            <button
              onClick={connect}
              className="nes-btn is-warning"
              style={{ fontSize: "10px" }}
            >
              Connect
            </button>
          )}
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <button
                className={`nes-btn ${
                  location.pathname === link.to ? "is-primary" : "is-success"
                }`}
                style={{ fontSize: "10px" }}
              >
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
