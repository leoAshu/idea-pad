import { AnimatePresence } from "framer-motion"

import IdeaCard from "./IdeaCard"
import Idea from "../models/idea"

interface IdeaCardProps {
    ideas: Idea[]
    handleUpvote: (id: string) => void
    handleDownVote: (id: string) => void
}

const IdeasList = (props: IdeaCardProps) => {
    const { ideas } = props
    return (
        <AnimatePresence>
            {ideas.map((idea, index) => (
                <IdeaCard
                    key={idea.id}
                    index={index}
                    idea={idea}
                    handleUpvote={() => {}}
                    handleDownvote={() => {}}
                />
            ))}
        </AnimatePresence>
    )
}

export default IdeasList