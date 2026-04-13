import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="uppercase flex flex-col justify-center">
      <motion.h1
        className="text-[16vw] font-black leading-[0.9] tracking-tighter mb-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Front-End
        <br />
        <span className="text-outline">dev</span>
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
