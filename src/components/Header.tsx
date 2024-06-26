import {Table} from "lucide-react"

const Header = () => {
  return (
    <header className="w-full h-12 bg-foreground text-background flex items-center p-4 gap-1 shadow-lg">
        <Table size={24}/>
        <h1 className="font-medium text-xl">Trello</h1>
    </header>
  )
}

export default Header