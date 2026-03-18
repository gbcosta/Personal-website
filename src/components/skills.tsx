import { Code } from "lucide-react";
import { DraggableItem } from "./draggableItem";
import { motion } from "motion/react";
import { SKILLS } from "../utils/types";

const Skill = ({ name }: { name: string }) => {
  return (
    <div
      className="border-2 shadow-[2px_2px_0px_0px_rgba(47,47,47,1)] px-4 py-1 rounded-full
            text-xs font-semibold flex justify-center items-center"
    >
      {name}
    </div>
  );
};

export const Skills = ({ constraintRef }: { constraintRef: any }) => {
  return (
    <DraggableItem constraintRef={constraintRef} initial={{ x: 0, y: 0 }}>
      <div className="gap-6 playful-card w-64">
        <span className="flex gap-2 text-lg font-bold items-center">
          <Code size={20} className="text-orange-400" />
          Superpowers
        </span>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((name) => (
            <motion.div key={name} whileHover={{ scale: 1.1, rotate: 5 }}>
              <Skill name={name} />
            </motion.div>
          ))}
        </div>
      </div>
    </DraggableItem>
  );
};
