import Home from './pages/Home'
import Login from './pages/Login'
import AuthProvider from './providers/auth/AuthProvider'
import IdeaProvider from './providers/idea/IdeaProvider'

function App() {
    return (
        <>
            <AuthProvider>
                <Login />
                {/* <IdeaProvider>
                    <Home />
                </IdeaProvider> */}
            </AuthProvider>
        </>
    )
}

export default App
