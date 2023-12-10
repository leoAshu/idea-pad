import { useEffect, useState } from "react"

import Idea from "../models/idea"
import IdeaCard from "../components/IdeaCard"
import { ideas as dummyIdeas } from "../constants"

const Home = () => {
    const [ideas, setIdeas] = useState<Idea[]>(dummyIdeas)

    const handleUpvote = (ideaId: string) => {
        setIdeas((prevIdeas) =>
            prevIdeas.map((idea) =>
                idea.id === ideaId
                    ? { ...idea, upvotes: idea.upvotes + 1 }
                    : idea,
            ),
        )
    }

    const handleDownvote = (ideaId: string) => {
        setIdeas((prevIdeas) =>
            prevIdeas.map((idea) =>
                idea.id === ideaId
                    ? { ...idea, upvotes: idea.upvotes - 1 }
                    : idea,
            ),
        )
    }

    useEffect(() => {
        const sortedIdeas = ideas.slice().sort((a, b) => b.upvotes - a.upvotes)
        console.log(sortedIdeas)

        setIdeas(sortedIdeas)
    }, [])

    return (
        <main className="w-full max-w-7xl mx-auto sm:px-8 mb-16">
            <div role="hero" className="my-12">
                <h1 className="font-bold text-5xl">
                    <span className="text-[#F2BA52]">!dea</span>Pad
                </h1>

                <p className="mt-2 text-lg font-medium">
                    Note down your ideas for future reference and expand upon
                    them!
                </p>
            </div>

            <div>
                {ideas.map((idea, index) => (
                    <IdeaCard
                        key={idea.id}
                        index={index}
                        idea={idea}
                        handleUpvote={handleUpvote}
                        handleDownvote={handleDownvote}
                    />
                ))}
            </div>
        </main>
    )
}

export default Home
