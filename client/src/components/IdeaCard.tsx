import upvote from "../assets/upvote.svg";
import Idea from "../models/idea";
import { formatDateToCustomString, getInitials } from "../utils";

interface IdeaCardProps {
  idea: Idea;
}

const IdeaCard = (props: IdeaCardProps) => {
  return (
    <div className="bg-white mt-2 shadow-md px-3 py-4 flex justify-start items-center">
      <div className="bg-[#F2BA52] rounded-full w-12 h-12 mx-4 flex justify-center items-center">
        {getInitials(props.idea.author)}
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
  );
};

export default IdeaCard;
