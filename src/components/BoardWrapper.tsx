type Props = {
  id: string;
  children: React.ReactNode;
};

const handleMouseEnter = (id: string) => {
    const target = document.getElementById(id);
    
    const options = target?.getElementsByClassName("board-options")
    
    if(options){
        for (const option of options) {
            option.classList.remove("invisible")
        }
    }
}
const handleMouseLeave = (id: string) => {
    const target = document.getElementById(id);
    
    const options = target?.getElementsByClassName("board-options")
    
    if(options){
        for (const option of options) {
            option.classList.add("invisible")
        }
    }
}

const BoardWrapper = ({ id, children }: Props) => {
  return (
    <div 
    onMouseEnter={() => handleMouseEnter(id)}
    onMouseLeave={() => handleMouseLeave(id)}
    className="w-full h-full flex items-center justify-between" 
    id={id}
    >
      {children}
    </div>
  );
};

export default BoardWrapper;
