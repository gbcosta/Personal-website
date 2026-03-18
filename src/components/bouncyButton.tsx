import { Dispatch, ReactNode, SetStateAction } from "react";

export const BouncyButton = ({
  setStars,
  children,
  onClick,
}: {
  setStars?: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  onClick?: () => void;
}) => {
  const onClickHandle = () => {
    if (onClick) onClick();
    if (!setStars) return;
    setStars((stars) => stars + 1);
  };
  return (
    <button
      onClick={onClickHandle}
      className="flex gap-2 bg-red-400 items-center px-5 rounded-2xl
            py-2 border-3 border-black text-white font-semibold h-10 translate-[-4px] 
            active:translate-0 active:shadow-none shadow-[4px_4px_0px_0px_rgba(47,47,47,1)]
            transition-all justify-center"
    >
      {children}
    </button>
  );
};
