import { ReactNode, useEffect, useState } from "react"

import Idea, { sortIdeas } from "./idea"
import IdeaContext from "./IdeaContext"

interface IdeaProviderProps {
    children: ReactNode
}

const IdeaProvider: React.FC<IdeaProviderProps> = ({ children }) => {
    const [ideas, setIdeas] = useState<Idea[]>([])

    const handleUpvote = (id: string) => {
        setIdeas((prevIdeas) => {
            const updatedIdeas = prevIdeas.map((idea) =>
                idea.id === id ? { ...idea, upvotes: idea.upvotes + 1 } : idea,
            )

            return sortIdeas(updatedIdeas)
        })
    }

    const handleDownvote = (id: string) => {
        setIdeas((prevIdeas) => {
            const updatedIdeas = prevIdeas.map((idea) =>
                idea.id === id ? { ...idea, upvotes: idea.upvotes - 1 } : idea,
            )

            return sortIdeas(updatedIdeas)
        })
    }

    const addIdea = (title: string, description: string) => {}

    useEffect(() => {
        const fetchIdeas = async () => {
            const response = await fetch("http://localhost:3000/api/ideas", {
                method: "GET",
            })

            const data: Idea[] = (await response.json())["ideas"]
            setIdeas(sortIdeas(data))
        }

        fetchIdeas()
    }, [])

    return (
        <IdeaContext.Provider
            value={{ ideas, setIdeas, handleUpvote, handleDownvote, addIdea }}
        >
            {children}
        </IdeaContext.Provider>
    )
}

export default IdeaProvider
