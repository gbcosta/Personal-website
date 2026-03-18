import { DraggableItem } from "./draggableItem";
import me from "../assets/me.jpg";
import { Github, Linkedin } from "lucide-react";
import { ReactNode } from "react";
import { BouncyButton } from "./bouncyButton";

const SocialButton = ({ children }: { children: ReactNode }) => {
  return (
    <button
      className="border-2 rounded-lg px-2 shadow-[2px_2px_0px_0px_rgba(47,47,47,1)]
                        hover:bg-yellow-200 translate-[-2px] active:translate-0 active:shadow-none
                        transition-all bg-white h-10"
    >
      {children}
    </button>
  );
};

export const Bio = ({ constraintRef }: { constraintRef: any }) => {
  return (
    <DraggableItem constraintRef={constraintRef} initial={{ x: 50, y: 50 }}>
      <div
        className="flex flex-col border-black border-4 rounded-xl mt-4 gap-6 w-80
                shadow-[8px_8px_0px_0px_rgba(47,47,47,1)] justify-center p-8 bg-white"
      >
        <div className="flex items-center gap-4">
          <img
            src={me}
            className="max-w-16 rounded-full aspect-square border-4 "
          />
          <div>
            <h2 className="text-xl font-semibold">Gabriel Santos!!!</h2>
            <span className="text-zinc-500 font-medium">Creative dev</span>
          </div>
        </div>

        <p className="text-sm">
          I turn coffe into code and ideas into pixels. Let's make something
          fun!
        </p>
        <div className="flex gap-3 items-center">
          <SocialButton>
            <Github size={18} />
          </SocialButton>
          <SocialButton>
            <Linkedin size={18} />
          </SocialButton>
          <BouncyButton />
        </div>
      </div>
    </DraggableItem>
  );
};
