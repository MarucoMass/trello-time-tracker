import type { Board } from "@/types";
import { Separator } from "./ui/separator";
import BoardOptions from "./BoardOptions";
import { Ellipsis } from "lucide-react";

type Props = {
    board: Board;
}

const Board = ({ board }: Props) => {
    return (
        <>
            <div id="board-header" className="w-full h-16 flex items-center p-6 bg-muted-foreground/55">
                <h2 className="font-bold text-xl">{board.title}</h2>
            </div>

            <Separator />

            <div id="board-content" className="flex gap-3 p-4">
                {board.lists.map(list => (
                    <div key={list.id} id={`board-${list.id}-list`} className="flex flex-col gap-4 min-w-[272px] h-fit bg-muted px-2 py-4 rounded-xl">
                        <div className="flex justify-between items-center">
                            <h3 className="pl-3 font-medium">
                                {list.title}
                            </h3>
                            <BoardOptions className="visible">
                                <Ellipsis className="size-4" />
                            </BoardOptions>
                        </div>
                        <div id={`list-${list.id}-tasks`} className="flex flex-col gap-2">
                            {
                                list.tasks.map(task => (
                                    <div key={`task-${task.id}`} className="bg-white px-3 py-2 rounded-[8px] shadow">
                                        {task.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Board