import { AnimatePresence } from "framer-motion"

import IdeaCard from "./IdeaCard"
import useIdeaContext from "../models/useIdeaContextHook"

const IdeasList = () => {
    const { ideas } = useIdeaContext()

    return (
        <AnimatePresence>
            {ideas.map((idea, index) => (
                <IdeaCard key={idea.id} index={index} idea={idea} />
            ))}
        </AnimatePresence>
    )
}

export default IdeasList
