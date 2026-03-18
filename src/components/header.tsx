import { Smile, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
export const Header = ({ stars }: { stars: number }) => {
  return (
    <div
      className="flex py-2 px-4 border-black border-3 rounded-full mt-4 items-center
            shadow-[4px_4px_0px_0px_rgba(47,47,47,1)] dot-pattern z-50 bg-white"
    >
      <header className="flex gap-5">
        <div className="flex gap-2">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary"
          >
            <Zap className="text-red-400" fill="currentColor" />
          </motion.div>
          <span className="uppercase font-bold tracking-wider">
            gabriel.dev
          </span>
        </div>
        <div className="bg-zinc-400 w-[2px] min-h-full" />
        <div className="flex gap-4">
          <Smile className="text-blue-400" />
          <div className="flex items-center gap-1 bg-yellow-400/10 px-2 rounded-4xl">
            <Star className="text-yellow-400" fill="currentColor" size={16} />
            <span className="font-mono">{stars}</span>
          </div>
        </div>
      </header>
    </div>
  );
};
