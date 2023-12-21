import Home from './pages/Home'
import AuthProvider from './providers/auth/AuthProvider'
import IdeaProvider from './providers/idea/IdeaProvider'

function App() {
    return (
        <>
            <AuthProvider>
                <IdeaProvider>
                    <Home />
                </IdeaProvider>
            </AuthProvider>
        </>
    )
}

export default App
