type Props = {
    children: React.ReactNode
}

const BoardOption = ({children}:Props) => {
  return (
    <div className="board-options invisible p-1 hover:bg-gray-300/60 hover:shadow">
        {children}
    </div>
  )
}

export default BoardOption