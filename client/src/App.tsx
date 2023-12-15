import Header from "./components/Header"
import Home from "./pages/Home"
import IdeaProvider from "./models/IdeaProvider"

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
