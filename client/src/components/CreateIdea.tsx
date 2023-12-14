import { motion } from "framer-motion"
import CreateIdeaOverlay from "./CreateIdeaOverlay"

interface CreateIdeaProps {
    isActive: boolean
    toggleOverlay: () => void
}

const CreateIdea = (props: CreateIdeaProps) => {
    const { isActive, toggleOverlay } = props

    return (
        <>
            <div className="flex justify-center items-center px-3 py-4 mb-8 bg-white shadow-md rounded-md">
                <div className="flex justify-center items-center rounded-full h-12 w-12 bg-[#F2BA52] mx-4">
                    <p className="text-3xl font-semibold text-white">!</p>
                </div>

                <motion.input
                    type="text"
                    placeholder="Note an Idea"
                    className="flex-1 py-4 pl-4 mr-4 bg-[#F7F7F7] outline-none border-2 border-[#F7F7F7] rounded-md"
                    autoFocus={false}
                    whileHover={{ borderColor: "#F2BA52" }}
                    transition={{ duration: 0.3 }}
                    value={""}
                    onChange={() => {}}
                    onClick={() => toggleOverlay()}
                />
            </div>

            {isActive && <CreateIdeaOverlay toggleOverlay={toggleOverlay} />}
        </>
    )
}

export default CreateIdea
