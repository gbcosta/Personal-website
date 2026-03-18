import { useRef, useState } from "react";
import { Bio } from "./components/bio";
import { Header } from "./components/header";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
function App() {
  const constraintRef = useRef<any>(null);
  const [stars, setStars] = useState(0);
  return (
    <div
      className="h-screen w-screen max-h-screen bg-zinc-100 flex flex-col items-center
            overflow-hidden select-none"
      ref={constraintRef}
    >
      <Header stars={stars} />
      <Bio constraintRef={constraintRef} setStars={setStars} />
      <Skills constraintRef={constraintRef} />
      <Contact constraintRef={constraintRef} />
    </div>
  );
}

export default App;
