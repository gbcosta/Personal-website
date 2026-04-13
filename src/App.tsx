import { Content } from "./components/content";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="min-h-screen w-full selection:bg-black selection:text-white">
      <div className="relative h-[500vh] bg-[#f0f0f0] overflow-hidden">
        <Header />
        <Content />
      </div>
    </main>
  );
}

export default App;
