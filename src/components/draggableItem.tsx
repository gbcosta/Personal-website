import { ReactNode } from "react";
import { motion } from "motion/react";

export const DraggableItem = ({
  children,
  constraintRef,
  initial,
}: {
  children: ReactNode;
  constraintRef: any;
  initial: { x: number; y: number };
}) => {
  return (
    <motion.div
      drag
      dragConstraints={constraintRef}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      initial={initial}
      whileDrag={{ scale: 1.05, rotate: 2, zIndex: 100 }}
    >
      {children}
    </motion.div>
  );
};
