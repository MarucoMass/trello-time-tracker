import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";

const Aside = () => {
  const name = "Maruco";
  return (
    <aside id="aside" className="w-1/4 h-dvh bg-muted">
      <div id="user" className="flex items-center p-4 gap-2">
        <Avatar>
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
    </aside>
  );
};

export default Aside;
