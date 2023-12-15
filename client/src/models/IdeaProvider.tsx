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

    const addIdea = (title: string, description: string) => {
        setIdeas((prevIdeas) => {
            const newIdea = {
                id:
                    prevIdeas.length > 0
                        ? `${parseInt(prevIdeas[prevIdeas.length - 1].id) + 1}`
                        : "1",
                date: new Date(),
                title,
                description,
                author: "Dummy User",
                upvotes: 1,
            }
            prevIdeas.push(newIdea)
            return sortIdeas(prevIdeas)
        })
    }

    useEffect(() => {
        // mock API call to get ideas
        setIdeas(sortIdeas(ideas))
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
