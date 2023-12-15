import { useContext } from "react"

import IdeaContext from "./IdeaContext"

const useIdeaContext = () => {
    const context = useContext(IdeaContext)

    if (!context) {
        throw new Error("useIdeaContext must be used within an IdeaProvider")
    }

    return context
}

export default useIdeaContext
