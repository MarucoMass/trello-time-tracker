import {Table2} from "lucide-react"

const Header = () => {
  return (
    <header className="w-full h-16 bg-foreground text-background flex items-center py-6 px-4 gap-1 shadow-lg">
        <Table2 size={24}/>
        <h1 className="font-medium text-2xl">Trello</h1>
    </header>
  )
}

export default Header