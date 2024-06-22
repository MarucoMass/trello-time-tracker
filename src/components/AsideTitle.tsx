import React, { ReactNode } from "react";

interface AsideTitleProps {
  children: ReactNode;
  className?: string;
  id: string;
}

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

const AsideTitle: React.FC<AsideTitleProps> = ({ children, className, id }) => {
  return (
    <div
      className={`w-full flex items-center py-2 px-4 gap-3 hover:bg-gray-200/85 cursor-pointer ${className}`}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
      id={id}
    >
      {children}
    </div>
  );
};

export default AsideTitle;
