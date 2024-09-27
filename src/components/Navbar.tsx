import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { smashconfig } from "./smashconfig";

interface NavbarProps {
  type: string;
}

const Navbar: React.FC<NavbarProps> = ({ type }) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const navbarId = smashconfig[type].navbarId;
    const navItems = [
      { name: "About", href: "/about", target: "_self" },
      navbarId != 1 && { name: "Play CT Version", href: "/", target: "_self" },
      navbarId != 2 && {
        name: "Play Celeb Version",
        href: "/celebmash",
        target: "_self",
      },
      navbarId != 3 && {
        name: "Play Athletes Version",
        href: "/sportsmash",
        target: "_self",
      },
      {
        name: "$aura",
        href: "https://dexscreener.com/solana/9vix1vducteoc2wertsp2tudxxpwaf69aeet8enpjpsn?maker=AJUUQHndVntX3QwLpqB8ByfaZbAVS3pjuKjWkEqHSnPj",
        target: "_blank",
      },
    ].filter(Boolean);

    setItems(navItems);
  }, [type]);

  if (!items.length) return null;

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 w-fit min-w-[546px] z-50 bg-bg-200/80 backdrop-blur-md text-lg font-bold text-white py-4 px-8 rounded-full shadow-lg"
      >
        <div className="container mx-auto flex justify-center items-center">
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
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
