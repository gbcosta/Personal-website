import { MessageCircle } from "lucide-react";
import { DraggableItem } from "./draggableItem.tsx";
import { BouncyButton } from "./bouncyButton.tsx";
import { useState } from "react";
import { PHONE } from "../utils/types.ts";

export const Contact = ({ constraintRef }: { constraintRef: any }) => {
  const [message, setMessage] = useState("");
  return (
    <DraggableItem constraintRef={constraintRef} initial={{ x: 0, y: 0 }}>
      <div className="playful-card w-72 gap-4 bg-white">
        <span className="flex gap-2 items-center text-lg font-bold">
          <MessageCircle size={20} className="text-green-400" />
          Say Hi!!!
        </span>
        <input
          value={message}
          onChange={(e) => {
            setMessage(() => e.target.value);
          }}
          className="outline-none rounded-2xl border text-xs font-bold py-2 px-4
                    mb-2 "
          placeholder="Your Message"
        />
        <BouncyButton
          onClick={() => {
            const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
          }}
        >
          Send Message 🚀
        </BouncyButton>
      </div>
    </DraggableItem>
  );
};
