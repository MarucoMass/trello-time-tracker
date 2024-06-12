import React, { ReactNode } from "react";

interface AsideTitleProps {
  children: ReactNode;
  className?: string;
}

const AsideTitle: React.FC<AsideTitleProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full flex items-center py-2 px-4 gap-3 hover:bg-gray-200 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default AsideTitle;
