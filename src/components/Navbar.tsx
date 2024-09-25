import React, { useState, useEffect } from "react";

interface NavbarProps {
  type: string;
}

const Navbar: React.FC<NavbarProps> = ({ type }) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const navItems = [
      { name: "About", href: "/about", target: "_self" },
      type === "kol"
        ? { name: "Play Celeb Version", href: "/celebmash", target: "_self" }
        : { name: "Play Kols Version", href: "/", target: "_self" },
      {
        name: "$aura",
        href: "https://dexscreener.com/solana/9vix1vducteoc2wertsp2tudxxpwaf69aeet8enpjpsn?maker=AJUUQHndVntX3QwLpqB8ByfaZbAVS3pjuKjWkEqHSnPj",
        target: "_blank",
      },
    ];

    setItems(navItems);
  }, [type]);

  if (!items.length) return null;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-bg-200/80 backdrop-blur-md text-lg font-bold text-white py-4 px-8 rounded-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          {items.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-gray-400 transition-all"
                target={item.target}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
