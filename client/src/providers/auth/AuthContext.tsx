import { createContext } from 'react'

interface AuthContextProps {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export default AuthContext
