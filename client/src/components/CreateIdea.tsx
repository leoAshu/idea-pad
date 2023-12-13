import { motion } from "framer-motion"

interface CreateIdeaProps {
    isActive: boolean
    toggleCreateIdea: () => void
}

const CreateIdea = (props: CreateIdeaProps) => {
    const { isActive, toggleCreateIdea } = props

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
                    onClick={() => toggleCreateIdea()}
                />
            </div>

            {isActive && (
                <motion.div
                    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-[25%] backdrop-blur-md z-10"
                    onClick={() => toggleCreateIdea()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="bg-white shadow-md p-4 rounded-md flex flex-1 max-w-3xl"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                    >
                        <motion.input
                            type="text"
                            placeholder="Title"
                            className="flex-1 py-4 px-3 bg-[#F7F7F7] outline-none border-2 border-[#F7F7F7] rounded-md"
                            whileHover={{ borderColor: "#F2BA52" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default CreateIdea
