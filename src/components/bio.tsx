import { DraggableItem } from "./draggableItem";
import me from "../assets/me.jpg";
import { Github, Heart, Linkedin } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { BouncyButton } from "./bouncyButton";

const SocialButton = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  const onClickHandle = () => {
    window.open(link, "_blank");
  };
  return (
    <button
      onClick={onClickHandle}
      className="border-2 rounded-lg px-2 shadow-[2px_2px_0px_0px_rgba(47,47,47,1)]
                        hover:bg-yellow-200 translate-[-2px] active:translate-0 active:shadow-none
                        transition-all bg-white h-10"
    >
      {children}
    </button>
  );
};

export const Bio = ({
  constraintRef,
  setStars,
}: {
  constraintRef: any;
  setStars: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <DraggableItem constraintRef={constraintRef} initial={{ x: 0, y: 0 }}>
      <div className="gap-6 w-80 playful-card">
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
          fun! ✨
        </p>
        <div className="flex gap-3 items-center">
          <SocialButton link="https://github.com/gbcosta">
            <Github size={18} />
          </SocialButton>
          <SocialButton link="https://www.linkedin.com/in/gbcostasantos/">
            <Linkedin size={18} />
          </SocialButton>
          <BouncyButton setStars={setStars}>
            Boop Me!
            <Heart size={18} />
          </BouncyButton>
        </div>
      </div>
    </DraggableItem>
  );
};
