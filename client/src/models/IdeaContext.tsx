import { createContext } from "react"

import Idea from "./idea"

interface IdeaContextProps {
    ideas: Idea[]
    setIdeas: React.Dispatch<React.SetStateAction<Idea[]>>
    handleVote: (id: string, vote: number) => Promise<void>
    addIdea: (title: string, description: string) => Promise<void>
}

const IdeaContext = createContext<IdeaContextProps>({} as IdeaContextProps)

export default IdeaContext
