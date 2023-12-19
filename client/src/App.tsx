import Header from './components/Header'
import Home from './pages/Home'
import IdeaProvider from './providers/idea/IdeaProvider'

function App() {
    return (
        <>
            <Header />
            <IdeaProvider>
                <Home />
            </IdeaProvider>
        </>
    )
}

export default App
