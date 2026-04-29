import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "motion/react";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { useEffect, useState } from "react";

export const Content = () => {
  function getXmax() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log(`-${(1920 - windowSize.width) / 300 + 76}%`, windowSize.width);
    return `-${(1920 - windowSize.width) / 300 + 76}%`;
  }

  const xMax = getXmax();

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", xMax]);
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
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
};
