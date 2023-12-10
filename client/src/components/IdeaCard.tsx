import { motion } from "framer-motion";

import upvote from "../assets/upvote.svg";
import Idea from "../models/idea";
import { formatDateToCustomString, getInitials } from "../utils";

interface IdeaCardProps {
  index: number;
  idea: Idea;
}

const IdeaCard = (props: IdeaCardProps) => {
  return (
    <motion.div
      key={props.index}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: props.index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <div className="bg-white mt-2 shadow-lg px-3 py-4 flex justify-start items-center transition-all ease-in">
        <div className="bg-[#F2BA52] rounded-full w-12 h-12 mx-4 flex justify-center items-center">
          <p className="font-semibold">{getInitials(props.idea.author)}</p>
        </div>

        <div className="flex flex-col flex-1 mx-4">
          <p className="text-lg text-slate-600 font-semibold">
            {props.idea.title}
          </p>
          <div className="flex justify-between text-slate-500 text-xs mt-1">
            <p>
              Created: {formatDateToCustomString(props.idea.date.toUTCString())}
            </p>
            <p>
              Edited: {formatDateToCustomString(props.idea.date.toUTCString())}
            </p>
          </div>
        </div>

        <div className="flex mx-4">
          <img src={upvote} className="w-6" />
          <p className="mx-1 w-4 text-center">{props.idea.upvotes}</p>
          <img src={upvote} className="w-6 rotate-180" />
        </div>
      </div>
    </motion.div>
  );
};

export default IdeaCard;
