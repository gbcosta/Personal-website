export const Header = () => {
  return (
    <header
      className="fixed top-6 left-0 w-full flex justify-between px-8 z-50 
            mix-blend-difference text-white"
    >
      <h2 className="font-sans font-black text-2xl uppercase">gabriel_costa</h2>
      <nav
        className="font-sans uppercase text-[10px] font-bold tracking-widest flex 
                flex-col gap-2 items-end"
      >
        <span>front-end developer</span>
        <span>based in brazil</span>
        <div className="mt-2 flex gap-4">
          <a href="https://github.com/gbcosta" className="hover:line-through">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/gbcostasantos/"
            className="hover:line-through"
          >
            linkedin
          </a>
        </div>
      </nav>
    </header>
  );
};
