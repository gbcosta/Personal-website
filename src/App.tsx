import { useRef } from "react";
import { Bio } from "./components/bio";
import { Header } from "./components/header";

function App() {
  const constraintRef = useRef<any>(null);
  return (
    <div
      className="min-h-screen min-w-screen bg-zinc-100 flex flex-col items-center"
      ref={constraintRef}
    >
      <Header />
      <Bio constraintRef={constraintRef} />
    </div>
  );
}

export default App;
