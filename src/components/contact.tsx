import { Github, Linkedin } from "lucide-react";
import { ReactNode } from "react";

export const Contact = () => {
  return (
    <section className="uppercase min-h-[100vh] flex justify-center items-center flex-col px-64">
      <h3 className="text-[16vw] text-center text-black font-black h-full leading-[0.8]">
        Contact
        <br />
        <span className="text-outline">Me</span>
      </h3>
      <p className="font-medium text-xl leading-loose ml-4">
        Let's create something fun
      </p>
      <div className="flex justify-center items-center gap-4 mt-8">
        {[
          { link: "https://github.com/gbcosta", icon: <Github size={32} /> },
          {
            link: "https://www.linkedin.com/in/gbcostasantos/",
            icon: <Linkedin size={32} />,
          },
        ].map(({ link, icon }) => {
          return <ContactButton link={link} icon={icon} />;
        })}
      </div>
    </section>
  );
};

const ContactButton = ({ link, icon }: { link: string; icon: ReactNode }) => {
  const onClickHandle = () => {
    window.open(link, "_blank");
  };
  return (
    <div
      className="rounded-full border-3 border-black p-2 cursor-pointer
                    hover:scale-115 transition-all duration-300"
      onClick={onClickHandle}
    >
      {icon}
    </div>
  );
};
