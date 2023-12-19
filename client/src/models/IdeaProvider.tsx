import { ReactNode, useEffect, useState } from 'react'

import Idea, { sortIdeas } from './idea'
import IdeaContext from './IdeaContext'

interface IdeaProviderProps {
    children: ReactNode
}

const IdeaProvider: React.FC<IdeaProviderProps> = ({ children }) => {
    const [ideas, setIdeas] = useState<Idea[]>([])

    const handleVote = async (id: string, vote: number): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            try {
                const ideaIndex = ideas.findIndex((idea) => idea.id === id)
                if (ideaIndex === -1) {
                    reject(new Error('Idea not found.'))
                    return
                }

                const updatedUpvotes = ideas[ideaIndex].upvotes + vote

                const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/ideas/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ upvotes: updatedUpvotes }),
                })

                if (!response.ok) {
                    console.error(`HTTP Error: ${response.status}`)
                    reject(new Error(`HTTP Error: ${response.status}`))
                    return
                }

                const updatedIdea: Idea = (await response.json())['idea']

                setIdeas((prevIdeas) => {
                    const updatedIdeas = prevIdeas.map((idea) => (idea.id === id ? updatedIdea : idea))
                    return sortIdeas(updatedIdeas)
                })
                resolve()
            } catch (error) {
                console.error('Error:', error)
                reject(error)
            }
        })
    }

    const addIdea = async (title: string, description: string): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/ideas`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, description }),
                })

                if (!response.ok) {
                    console.error(`HTTP Error: ${response.status}`)
                    reject(`HTTP Error: ${response.status}`)
                    return
                }

                const newIdea: Idea = (await response.json())['idea']
                setIdeas((prevIdeas) => [...prevIdeas, newIdea])

                resolve()
            } catch (error) {
                console.error('Error during fetch:', error)
                reject(error)
            }
        })
    }

    useEffect(() => {
        const fetchIdeas = async () => {
            const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/ideas`, {
                method: 'GET',
            })

            if (!response.ok) {
                console.log(`HTTP Error: ${response.status}`)
                return
            }

            const data: Idea[] = (await response.json())['ideas']
            setIdeas(sortIdeas(data))
        }

        fetchIdeas()
    }, [])

    return <IdeaContext.Provider value={{ ideas, setIdeas, handleVote, addIdea }}>{children}</IdeaContext.Provider>
}

export default IdeaProvider
