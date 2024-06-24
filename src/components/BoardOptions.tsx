type Props = {
  children: React.ReactNode;
  className?: string;
}

const BoardOption = ({ children, className = "" }: Props) => {
  const isVisible = className.includes('visible');
  return (
    <div className={
      `board-options cursor-pointer ${isVisible ? "" : "invisible"} 
      p-1 hover:bg-gray-300/60 hover:shadow ${className}`}>
      {children}
    </div>
  )
}

export default BoardOption