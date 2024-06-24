import Aside from "./components/Aside";
import Board from "./components/Board";
import Header from "./components/Header";
import { Separator } from "./components/ui/separator";
function App() {
  const board = {
    id: "1",
    title: "tablero 1",
    lists: [
      {
        id: "1",
        title: "lista 1",
        tasks: [
          { id: "1", title: "tarea 1" },
          { id: "2", title: "tarea 2" },
          { id: "3", title: "tarea 3" }
        ]
      },
      {
        id: "2",
        title: "lista 2",
        tasks: [
          { id: "1", title: "tarea 1" },
          { id: "2", title: "tarea 2" },
          { id: "3", title: "tarea 3" }
        ]
      }
    ]
  }

  return (
    <>
      <div id="header" className="w-full">
        <Header />
      </div>

      <main className="flex h-dvh">
        <Aside />
        <Separator orientation="vertical" />

        <div id="content" className="w-full">
          <Board board={board} />
        </div>
      </main>
    </>
  );
}

export default App;
