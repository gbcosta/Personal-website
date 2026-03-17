import { Smile, Star, Zap } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex p-2 border-black border-3 rounded-full mt-4 shadow-[4px_4px_0px_0px_rgba(47,47,47,1)]">
      <header className="flex gap-5">
        <div className="flex gap-2">
          <Zap className="text-red-400" fill="currentColor" />
          <span className="uppercase font-sans font-bold tracking-wider">
            gabriel.dev
          </span>
        </div>
        <div className="bg-zinc-400 w-[0.2px] h-full" />
        <div className="flex gap-4">
          <Smile className="text-blue-400" />
          <div className="flex items-center gap-1 bg-yellow-400/10 px-2 rounded-4xl">
            <Star className="text-yellow-400" fill="currentColor" size={16} />
            <span>0</span>
          </div>
        </div>
      </header>
    </div>
  );
};
