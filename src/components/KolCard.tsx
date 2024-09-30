import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import KOL from "@/types/ct";

interface KOLCardProps {
  kol: KOL | undefined;
  handleClick: () => void;
  diff: number;
  winner: KOL | undefined;
  disable: boolean;
}

export const KOLCard: React.FC<KOLCardProps> = ({
  kol,
  handleClick,
  diff,
  winner,
  disable,
}) => {
  const [isAuraVisible, setIsAuraVisible] = useState(false);
  const isWinner = winner?.id === kol?.id;

  useEffect(() => {
    // Show aura when either diff or winner changes
    if (diff > 0 && winner) {
      setIsAuraVisible(true);
    }
  }, [diff, winner]);

  const handleAuraAnimationComplete = () => {
    // Hide aura after animation is complete
    setIsAuraVisible(false);
  };

  return (
    <AnimatePresence mode="wait">
      {kol ? (
        <motion.div
          key={kol.id?.toString()} // Adding a key based on the kol id to trigger exit/enter animations
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }} // This is the exit animation
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex flex-col items-center w-full"
        >
          <div className="relative max-w-96 aspect-square w-full transition-all rounded-2xl group">
            {/* Image */}
            <button
              className={
                "absolute inset-0 border-[12px] sm:border-[24px] overflow-hidden border-bg-100 hover:border-brand-primary transition-all duration-300 rounded-2xl transform rotate-45 scale-75 " +
                (disable ? "opacity-50 pointer-events-none" : "opacity-100")
              }
              onClick={handleClick}
            >
              <Image
                src={kol.pfp!}
                fill={true}
                sizes="400px"
                alt="KOL Image"
                className={
                  "object-cover scale-[1.4] -rotate-45 cursor-pointer duration-300 transition-all hover:scale-[1.5] "
                }
              />
            </button>
          </div>

          <p className="mt-4">
            <a
              className="underline text-xl "
              href={`https://x.com/${kol?.handle}`}
              target="_blank"
            >
              @{kol?.handle}
            </a>
          </p>

          <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-xl text-center sm:text-3xl font-bold">
            <AnimatePresence>
              {isAuraVisible && (
                <motion.p
                  key={`${kol?.id}-${diff}-${isWinner}`} // Unique key to trigger reanimation
                  className={isWinner ? "text-brand-primary" : "text-red-500"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }} // Animate out when it disappears
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onAnimationComplete={handleAuraAnimationComplete} // Hide aura after animation
                >
                  {isWinner
                    ? `+ ${diff.toFixed(2)} aura`
                    : `- ${diff.toFixed(2)} aura`}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full justify-center items-center"
        >
          Loading...
        </motion.div>
      )}
    </AnimatePresence>
  );
};
