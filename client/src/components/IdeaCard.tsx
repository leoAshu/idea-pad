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
            className="bg-white mt-2 shadow-md rounded-md px-1 md:px-3 py-2 md:py-4 flex justify-start items-center border-2 border-white"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={
                window.innerWidth >= 768
                    ? {
                          borderColor: '#F2BA52',
                          transition: { duration: 0.3, ease: 'easeIn' },
                      }
                    : {}
            }
        >
            <div className="bg-[#F2BA52] rounded-full w-8 h-8 md:w-12 md:h-12 mx-2 md:mx-4 flex justify-center items-center">
                <p className="text-white text-xs md:text-base font-black md:font-semibold">
                    {getInitials(idea.author)}
                </p>
            </div>

            <div className="flex flex-col flex-1 mx-2 md:mx-4">
                <p className="text-[0.9rem] md:text-lg text-slate-700 font-medium md:font-semibold">{idea.title}</p>

                <p className="text-slate-500 text-xs mt-1 hidden md:block">
                    Created: {formatDateToCustomString(idea.date)}
                </p>
            </div>

            <div className="flex mx-2 md:mx-4 justify-center items-center">
                <motion.button
                    whileHover={window.innerWidth >= 768 ? { scale: 1.15 } : {}}
                    whileTap={window.innerWidth >= 768 ? { scale: 0.9 } : {}}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleVote(idea.id, 1)}
                >
                    <img src={downvote} className="w-4 md:w-6 h-4 md:h-6 rotate-180" draggable={false} />
                </motion.button>

                <p className="mx-1 w-4 text-slate-700 font-semibold text-right text-xs md:text-base">{idea.upvotes}</p>

                <motion.button
                    whileHover={window.innerWidth >= 768 ? { scale: 1.15 } : {}}
                    whileTap={window.innerWidth >= 768 ? { scale: 0.9 } : {}}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleVote(idea.id, -1)}
                >
                    <img src={downvote} className="w-4 md:w-6 h-4 md:h-6" draggable={false} />
                </motion.button>
            </div>
        </motion.div>
    )
}

export default IdeaCard
