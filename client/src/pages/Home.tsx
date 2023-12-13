import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { ideas as dummyIdeas } from "../constants"
import Idea from "../models/idea"
import Hero from "../components/Hero"
import IdeaCard from "../components/IdeaCard"

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

            <div className="flex justify-center items-center px-3 py-4 mb-8 bg-white shadow-md">
                <div className="flex justify-center items-center rounded-full h-12 w-12 bg-[#F2BA52] mx-4">
                    <p className="text-3xl font-semibold text-white">!</p>
                </div>
                <motion.input
                    type="text"
                    placeholder="Note an Idea"
                    className="flex-1 py-4 pl-4 mr-4 bg-[#F7F7F7] outline-none border-2 border-[#F7F7F7]"
                    autoFocus={false}
                    whileHover={{ borderColor: "#F2BA52" }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <div>
                <AnimatePresence>
                    {ideas.map((idea, index) => (
                        <IdeaCard
                            key={idea.id}
                            index={index}
                            idea={idea}
                            handleUpvote={handleUpvote}
                            handleDownvote={handleDownvote}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </main>
    )
}

export default Home
