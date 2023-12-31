import { motion } from 'framer-motion'

import downvote from '../assets/downvote.svg'
import Idea from '../models/idea'
import { formatDateToCustomString, getInitials } from '../utils'
import useIdeaContext from '../hooks/useIdeaContextHook'

interface IdeaCardProps {
    index: number
    idea: Idea
}

const IdeaCard = (props: IdeaCardProps) => {
    const { index, idea } = props
    const { handleVote } = useIdeaContext()

    return (
        <motion.div
            key={index}
            className="bg-white mt-2 shadow-md rounded-md px-3 py-4 flex justify-start items-center border-2 border-white"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{
                borderColor: '#F2BA52',
                transition: { duration: 0.3, ease: 'easeIn' },
            }}
        >
            <div className="bg-[#F2BA52] rounded-full w-12 h-12 mx-4 flex justify-center items-center">
                <p className="font-semibold text-white">{getInitials(idea.author)}</p>
            </div>

            <div className="flex flex-col flex-1 mx-4">
                <p className="text-lg text-slate-700 font-semibold">{idea.title}</p>

                <p className="text-slate-500 text-xs mt-1">Created: {formatDateToCustomString(idea.date)}</p>
            </div>

            <div className="flex mx-4 justify-center items-center">
                <motion.button
                    className="px-0.5 py-1"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleVote(idea.id, 1)}
                >
                    <img src={downvote} className="w-6 h-6 rotate-180" />
                </motion.button>

                <p className="mx-1 w-4 text-slate-700 font-semibold text-right">{idea.upvotes}</p>

                <motion.button
                    className="px-0.5 py-1"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleVote(idea.id, -1)}
                >
                    <img src={downvote} className="w-6 h-6" />
                </motion.button>
            </div>
        </motion.div>
    )
}

export default IdeaCard
