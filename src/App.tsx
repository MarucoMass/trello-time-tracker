import Aside from "./components/Aside";
import Header from "./components/Header";
import { Separator } from "./components/ui/separator";
function App() {
  return (
    <>
      <div id="header" className="w-full">
        <Header />
      </div>

      <main className="flex h-dvh">
        <Aside />
        <Separator orientation="vertical"/>
        <div id="content"></div>
      </main>
    </>
  );
}

export default App;
