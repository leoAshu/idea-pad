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

    const addIdea = async (title: string, description: string) => {
        const params = new URLSearchParams()
        params.append("title", title)
        params.append("description", description)

        const response = await fetch("http://localhost:3000/api/ideas", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        })

        if (!response.ok) {
            console.log(`HTTP Error: ${response.status}`)
            return
        }

        const data: Idea = (await response.json())["idea"]
        setIdeas((prevIdeas) => [...prevIdeas, data])
    }

    useEffect(() => {
        const fetchIdeas = async () => {
            const response = await fetch("http://localhost:3000/api/ideas", {
                method: "GET",
            })

            if (!response.ok) {
                console.log(`HTTP Error: ${response.status}`)
                return
            }

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
