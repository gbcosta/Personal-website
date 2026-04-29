import { useState } from "react";

export const About = () => {
  const [mouseEnter, setMouseEnter] = useState("JS");

  return (
    <section className="uppercase flex flex-col justify-center items-center w-[100vw]">
      <div className="grid grid-cols-2 gap-2">
        <h2 className="text-4xl lg:text-8xl font-black leading-[0.8] tracking-tighter mb-8 ">
          about me.
        </h2>
        <div className="flex flex-col gap-2 w-full max-w-96">
          <span className="text-zinc-500 text-[10px] font-bold tracking-widest">
            skills
          </span>
          <div className="flex flex-wrap gap-1">
            {["React", "Typescript", "Javascript", "HTML", "CSS", "Node"].map(
              (e) => {
                return (
                  <div
                    className="border border-black/30 lg:text-xs rounded-full px-1 py-1
                                text-[10px] hover:bg-black hover:text-white transition-colors duration-75"
                  >
                    {e}
                  </div>
                );
              },
            )}
          </div>
        </div>
        <p className="text-xs lg:text-2xl font-medium tracking-widest">
          "Hey there! I’m Gabriel. I work as a Front-end Developer, though I
          know my way around the Back-end too. I mostly focus on TypeScript and
          React, but I love experimenting with C++ and C# on the side—especially
          when I’m making games in my spare time."
        </p>
        <div
          className="bg-yellow-500 h-[50vh] lg:h-[60vh] max-w-96 w-full flex justify-center items-center 
                    group hover:bg-blue-500 transition-all duration-700  rounded-2xl aspect-4/5"
          onMouseEnter={() => {
            setMouseEnter("TS");
          }}
          onMouseLeave={() => {
            setMouseEnter("JS");
          }}
        >
          {["TS", "JS"].map((e) => {
            return (
              <span
                className={`text-black text-8xl font-bold group-hover:text-white
${mouseEnter == e ? "block" : "hidden"} transition-all duration-700`}
              >
                {e}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
