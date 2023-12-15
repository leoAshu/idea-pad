import { ReactNode, useEffect, useState } from "react"

import Idea, { sortIdeas } from "./idea"
import { ideas as dummyIdeas } from "../constants"
import IdeaContext from "./IdeaContext"

interface IdeaProviderProps {
    children: ReactNode
}

const IdeaProvider: React.FC<IdeaProviderProps> = ({ children }) => {
    const [ideas, setIdeas] = useState<Idea[]>(dummyIdeas)

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

    useEffect(() => {
        // mock API call to get ideas
        setIdeas(sortIdeas(ideas))
    }, [])

    return (
        <IdeaContext.Provider
            value={{ ideas, setIdeas, handleUpvote, handleDownvote }}
        >
            {children}
        </IdeaContext.Provider>
    )
}

export default IdeaProvider
