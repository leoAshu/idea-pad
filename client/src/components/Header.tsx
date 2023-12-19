import { motion } from 'framer-motion'

import useAuthContext from '../hooks/useAuthContextHook'

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuthContext()
    return (
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 shadow-md sticky top-0 z-10 select-none">
            <div className="py-5 text-4xl font-bold">
                <span className="text-[#F2BA52]">!dea</span>Pad
            </div>

            {!isLoggedIn ? (
                <motion.button
                    className="px-6 py-2 text-lg font-semibold rounded-md"
                    onClick={() => setIsLoggedIn(true)}
                    initial={{ backgroundColor: 'rgba(242, 186, 82, 0.8)', color: 'white' }}
                    animate={{ backgroundColor: 'rgba(242, 186, 82, 0.8)', color: 'white' }}
                    whileHover={{ backgroundColor: 'rgba(242, 186, 82, 1)', color: 'white' }}
                    whileTap={{ backgroundColor: 'rgba(242, 186, 82, 1)', color: 'white', scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                >
                    Login
                </motion.button>
            ) : (
                <div
                    className="bg-[#F2BA52] rounded-full w-14 h-14 flex justify-center items-center cursor-pointer"
                    onClick={() => setIsLoggedIn(false)}
                >
                    <p className="font-semibold text-lg text-white">AO</p>
                </div>
            )}
        </header>
    )
}

export default Header
