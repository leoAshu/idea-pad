import Hero from "../components/Hero"
import NewIdea from "../components/NewIdea"
import IdeasList from "../components/IdeasList"

const Home = () => {
    return (
        <main className="w-full max-w-7xl mx-auto sm:px-8 mb-16 select-none">
            <Hero />
            <NewIdea />
            <IdeasList />
        </main>
    )
}

export default Home
