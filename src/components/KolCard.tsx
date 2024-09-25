import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import KOL from "@/types/ct";

interface KOLCardProps {
  kol: KOL | undefined;
  handleClick: () => void;
  diff: number;
  winner: KOL | undefined;
}

export const KOLCard: React.FC<KOLCardProps> = ({
  kol,
  handleClick,
  diff,
  winner,
}) => {
  const [isAuraVisible, setIsAuraVisible] = useState(true);
  const isWinner = winner?.id === kol?.id;

  useEffect(() => {
    // Show aura when either diff or winner changes
    setIsAuraVisible(true);
  }, [diff, winner]);

  const handleAuraAnimationComplete = () => {
    // Hide aura after animation is complete
    setIsAuraVisible(false);
  };

  return (
    <motion.div className="flex flex-col items-center w-full">
      {kol ? (
        <div className="relative max-w-96 aspect-square w-full transition-all rounded-2xl group">
          {/* Image */}
          {/* Rotated border */}
          <div className="absolute inset-0 border-[24px] overflow-hidden border-bg-100 hover:border-brand-primary transition-all duration-300 rounded-2xl transform rotate-45 scale-75 ">
            <Image
              src={kol.pfp!}
              fill={true}
              sizes="400px"
              alt="KOL Image"
              className="object-cover scale-[1.4] -rotate-45 cursor-pointer duration-300 transition-all hover:scale-[1.5]"
              onClick={handleClick}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">Loading...</div>
      )}

      <p className="mt-4">
        <a
          className="underline text-xl "
          href={`https://x.com/${kol?.handle}`}
          target="_blank"
        >
          @{kol?.handle}
        </a>
      </p>

      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
        <AnimatePresence>
          {isAuraVisible && (
            <motion.p
              key={`${kol?.id}-${diff}-${isWinner}`} // Unique key to trigger reanimation
              className={isWinner ? "text-brand-primary" : "text-red-500"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }} // Animate out when it disappears
              transition={{ duration: 0.7, ease: "easeOut" }}
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
  );
};
