import { useEffect, useState } from "react"

import { ideas as dummyIdeas } from "../constants"
import Idea from "../models/idea"
import Hero from "../components/Hero"
import CreateIdea from "../components/CreateIdea"
import IdeasList from "../components/IdeasList"

const Home = () => {
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

    const sortIdeas = (ideas: Idea[]) => {
        return ideas.slice().sort((a, b) => b.upvotes - a.upvotes)
    }

    useEffect(() => {
        setIdeas(sortIdeas(ideas))
    }, [])

    return (
        <main className="w-full max-w-7xl mx-auto sm:px-8 mb-16">
            <Hero />

            <CreateIdea />

            <IdeasList
                ideas={ideas}
                handleUpvote={handleUpvote}
                handleDownVote={handleDownvote}
            />
        </main>
    )
}

export default Home
