import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import NewIdeaOverlay from './NewIdeaOverlay'

const NewIdea = () => {
    const [isOverlayActive, setIsOverlayActive] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOverlayActive ? 'hidden' : 'visible'
    }, [isOverlayActive])

    return (
        <>
            <div className="flex justify-center items-center px-1 md:px-3 py-2 md:py-4 mb-8 bg-white shadow-md rounded-md">
                <div className="flex justify-center items-center rounded-full h-8 w-8 md:h-12 md:w-12 bg-[#F2BA52] mx-2 md:mx-4">
                    <p className="text-lg md:text-3xl font-black md:font-semibold text-white">!</p>
                </div>

                <motion.input
                    type="text"
                    placeholder="Note an Idea"
                    className="flex-1 py-2 md:py-4 pl-2 md:pl-4 mr-2 md:mr-4 bg-[#F7F7F7] outline-none border-2 border-[#F7F7F7] rounded-md"
                    autoFocus={false}
                    whileHover={{ borderColor: '#F2BA52' }}
                    transition={{ duration: 0.3 }}
                    value={''}
                    onChange={() => {}}
                    onMouseDown={(e) => {
                        e.preventDefault()
                        setIsOverlayActive(true)
                    }}
                />
            </div>

            {isOverlayActive && <NewIdeaOverlay closeOverlay={() => setIsOverlayActive(false)} />}
        </>
    )
}

export default NewIdea
