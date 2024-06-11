import { Separator } from "./ui/separator";

const Aside = () => {
  const name = "hola guachin";
  return (
    <aside id="aside" className="w-1/4 h-dvh bg-muted">
      <div className="p-4 flex flex-col">
        <h2 className="text-xl font-bold">{name}</h2>
        <span className="text-xs italic">hello</span>
      </div>

      <Separator />
    </aside>
  );
};

export default Aside;
