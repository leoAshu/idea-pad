import Header from '../components/Header'
import Hero from '../components/Hero'
import NewIdea from '../components/NewIdea'
import IdeasList from '../components/IdeasList'

const Home = () => {
    return (
        <>
            <Header />
            <main className="px-4 sm:px-8 mb-16 w-full max-w-7xl mx-auto select-none">
                <Hero />
                <NewIdea />
                <IdeasList />
            </main>
        </>
    )
}

export default Home
