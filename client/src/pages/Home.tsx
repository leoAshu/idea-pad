import { useEffect, useState } from "react"

import Hero from "../components/Hero"
import CreateIdea from "../components/CreateIdea"
import IdeasList from "../components/IdeasList"

const Home = () => {
    const [isCreateIdeaActive, setIsCreateIdeaActive] = useState(false)

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsCreateIdeaActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [])

    useEffect(() => {
        document.body.style.overflow = isCreateIdeaActive ? "hidden" : "visible"
    }, [isCreateIdeaActive])

    return (
        <main className="w-full max-w-7xl mx-auto sm:px-8 mb-16">
            <Hero />

            <CreateIdea
                isActive={isCreateIdeaActive}
                toggleOverlay={() => setIsCreateIdeaActive((prev) => !prev)}
            />

            <IdeasList />
        </main>
    )
}

export default Home
