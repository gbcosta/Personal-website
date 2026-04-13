import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "motion/react";
import { Hero } from "./hero";
import { About } from "./about";
export const Content = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const smoothX = useSpring(x, { damping: 10, stiffness: 50 });

  const scrollVelocity = useVelocity(scrollYProgress);
  const skew = useTransform(scrollVelocity, [-1, 1], [-20, 20]);
  const smoothSkew = useSpring(skew, { damping: 50, stiffness: 400 });

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex items-center 
            overflow-hidden"
    >
      <motion.div
        className="flex items-center gap-[20vw] px-[5vw]"
        style={{
          x: smoothX,
          skewX: smoothSkew,
        }}
      >
        <Hero />
        <About />
      </motion.div>
    </div>
  );
};
