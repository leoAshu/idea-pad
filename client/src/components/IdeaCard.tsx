import { motion } from "framer-motion"

import downvote from "../assets/downvote.svg"
import Idea from "../models/idea"
import { formatDateToCustomString, getInitials } from "../utils"

interface IdeaCardProps {
    index: number
    idea: Idea
    handleUpvote: (ideaId: string) => void
    handleDownvote: (ideaId: string) => void
}

const IdeaCard = (props: IdeaCardProps) => {
    const { idea, index, handleUpvote, handleDownvote } = props

    return (
        <motion.div
            key={index}
            className="bg-white mt-2 shadow-lg px-3 py-4 flex justify-start items-center border-white border-2"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{
                scale: 1.03,
                border: "2px solid #F2BA52",
                transition: { duration: 0.2, ease: "easeIn" },
            }}
        >
            <div className="bg-[#F2BA52] rounded-full w-12 h-12 mx-4 flex justify-center items-center">
                <p className="font-semibold">{getInitials(idea.author)}</p>
            </div>

            <div className="flex flex-col flex-1 mx-4">
                <p className="text-lg text-slate-700 font-semibold">
                    {idea.title}
                </p>
                <div className="flex justify-between text-slate-500 text-xs mt-1">
                    <p>
                        Created:{" "}
                        {formatDateToCustomString(idea.date.toUTCString())}
                    </p>
                    <p>
                        Edited:{" "}
                        {formatDateToCustomString(idea.date.toUTCString())}
                    </p>
                </div>
            </div>

            <div className="flex mx-4 justify-center items-center">
                <motion.button
                    className="px-0.5 py-1"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleUpvote(idea.id)}
                >
                    <motion.img src={downvote} className="w-6 h-6 rotate-180" />
                </motion.button>

                <p className="mx-1 w-4 text-slate-700 font-semibold text-right">
                    {idea.upvotes}
                </p>

                <motion.button
                    className="px-0.5 py-1"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleDownvote(idea.id)}
                >
                    <img src={downvote} className="w-6 h-6" />
                </motion.button>
            </div>
        </motion.div>
    )
}

export default IdeaCard
