import { motion } from "motion/react";
import synapse from "../assets/synapse.jpeg";
import purpleOcean from "../assets/purpleOceanTheme.jpg";

import { ArrowDownRight } from "lucide-react";
export const Projects = () => {
  return (
    <section className="uppercase min-h-[100vh]">
      <div className="flex gap-32">
        <h3 className="text-8xl text-center [writing-mode:vertical-lr] text-zinc-300 font-bold h-full">
          Projects
        </h3>
        <div className="flex items-center justify-center  gap-12">
          <Card
            name={"Synapse Hub"}
            src={synapse}
            description="Ai Hub"
            link="https://github.com/gbcosta/AI-Webview-App"
          />
          <Card
            name={"Purple Ocean Theme"}
            src={purpleOcean}
            description="VS Code Theme"
            link="https://purpleocean.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({
  name,
  description,
  src,
  link,
}: {
  name: string;
  description: string;
  src: string;
  link: string;
}) => {
  return (
    <motion.div
      className="flex flex-col uppercase cursor-pointer group"
      whileHover={{ y: -20 }}
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <div
        className="aspect-[3/4] h-[70vh] rounded-2xl overflow-hidden 
                            flex items-center justify-center"
      >
        <img
          src={src}
          className="object-cover w-full h-full rounded-2xl hover:scale-110
                                    transition-all duration-300 grayscale hover:grayscale-0"
        />
        <div
          className="absolute w-16 h-16 bg-white text-black rounded-full
                                flex justify-center items-center opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
        >
          <ArrowDownRight className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-4xl font-black tracking-tighter">{name}</h3>
      <p className="text-sm text-zinc-500 font-bold tracking-widest">
        {description}
      </p>
    </motion.div>
  );
};
