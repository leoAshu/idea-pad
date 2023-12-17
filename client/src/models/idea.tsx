interface Idea {
    id: string
    date: string
    title: string
    description: string
    author: string
    upvotes: number
}

const sortIdeas = (ideas: Idea[]) => {
    return ideas.slice().sort((a, b) => b.upvotes - a.upvotes)
}

export default Idea
export { sortIdeas }
