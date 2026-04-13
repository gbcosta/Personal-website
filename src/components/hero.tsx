import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="uppercase flex flex-col justify-center w-[100vw]">
      <motion.h1
        className="text-[25vw] font-black leading-[0.8] tracking-tighter mb-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Front
        <br />
        <span className="text-outline"> dev</span>
      </motion.h1>
      <div className="flex items-center">
        <div className="w-32 h-[1.5px] bg-black" />
        <p className="font-medium text-xl leading-loose ml-4">
          creating fun experiments on the web
        </p>
      </div>
    </section>
  );
};
