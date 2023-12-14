import { motion } from "framer-motion"

interface CreateIdeaOverlay {
    toggleOverlay: () => void
}

const CreateIdeaOverlay = (props: CreateIdeaOverlay) => {
    return (
        <motion.div
            role="background-overlay"
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-[25%] backdrop-blur-md z-10"
            onClick={() => props.toggleOverlay()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
                role="popup-container"
                className="bg-white shadow-md p-4 rounded-md flex flex-1 flex-col max-w-3xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
            >
                <motion.input
                    type="text"
                    placeholder="Title"
                    className="flex-1 py-4 px-3 bg-[#F7F7F7] outline-none border-2 border-[#F7F7F7] rounded-md"
                    whileHover={{ borderColor: "#F2BA52" }}
                    whileFocus={{ borderColor: "#F2BA52" }}
                    transition={{ duration: 0.3 }}
                />

                <motion.textarea
                    placeholder="Description (Optional)"
                    rows={10}
                    className="py-4 px-3 mt-4 bg-[#F7F7F7] outline-none border-2 border-[#F7F7F7] rounded-md resize-none"
                    whileHover={{ borderColor: "#F2BA52" }}
                    whileFocus={{ borderColor: "#F2BA52" }}
                    transition={{ duration: 0.3 }}
                />

                <button className="py-4 w-1/3 mt-4 bg-[#F2BA52] text-white font-semibold rounded-md bg-opacity-75 hover:bg-opacity-100 transition-all duration-300">
                    Add
                </button>
            </motion.div>
        </motion.div>
    )
}

export default CreateIdeaOverlay
