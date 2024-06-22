// import { Avatar } from "./ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "./ui/separator";
import AsideTitle from "./AsideTitle";
import BoardOptions from "./BoardOptions";
import {
  Table2,
  CalendarDays,
  User,
  Settings,
  TableProperties,
  ChevronDown,
  Plus,
  Ellipsis,
} from "lucide-react";

const Aside = () => {
  const name = "Maruco";
  return (
    <aside id="aside" className="w-1/4 max-w-64 h-dvh bg-muted">
      <div id="user" className="flex items-center p-3 gap-2">
        <Avatar className="size-8">
          <div className="w-full h-full bg-foreground text-background text-lg font-semibold flex items-center justify-center">
            {name[0].toUpperCase()}
          </div>
        </Avatar>
        <div className=" flex flex-col">
          <h2 className="text-sm font-bold">{name}</h2>
          <span className="text-xs italic">Gratuito</span>
        </div>
      </div>

      <Separator />

      <div id="boards" className="py-2">
        <AsideTitle id="table-boards">
          <Table2 className="size-4" />
          <h2 className="text-sm font-regular">Tableros</h2>
        </AsideTitle>

        <AsideTitle className="justify-between" id="members">
          <div className="flex gap-2">
            <User className="size-4" />
            <h2 className="text-sm font-regular">Miembros</h2>
          </div>
          <Plus className="size-4" />
        </AsideTitle>

        <AsideTitle id="settings">
          <Settings className="size-4" />
          <h2 className="text-sm font-medium">
            Ajustes de tu Espacio de Trabajo
          </h2>
          <ChevronDown className="size-5" />
        </AsideTitle>

        <div id="boards-container">
          <h2 className="text-sm font-medium p-3">
            Vistas del Espacio de trabajo
          </h2>

          <AsideTitle id="table" className="justify-between">
            <div className="flex items-center gap-3">
              <TableProperties className="size-4" />
              <h2 className="text-sm font-regular italic">Tabla</h2>
            </div>
            <BoardOptions>
              <Ellipsis className="size-4" />
            </BoardOptions>
          </AsideTitle>

          <AsideTitle id="calendary" className="justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays className="size-4" />
              <h2 className="text-sm font-regular italic">Calendario</h2>
            </div>
            <BoardOptions>
              <Ellipsis className="size-4" />
            </BoardOptions>
          </AsideTitle>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
