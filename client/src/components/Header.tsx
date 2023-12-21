import useAuthContext from '../hooks/useAuthContextHook'

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuthContext()
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-10 select-none">
            <div className="px-4 md:px-8 mx-auto max-w-7xl flex justify-between items-center">
                <div className="py-3 md:py-5 text-2xl md:text-4xl font-bold">
                    <span className="text-[#F2BA52]">!dea</span>Pad
                </div>

                {!isLoggedIn && (
                    <div
                        className="bg-[#F2BA52] rounded-full w-10 h-10 md:w-14 md:h-14 flex justify-center items-center cursor-pointer"
                        onClick={() => setIsLoggedIn(false)}
                    >
                        <p className="font-semibold text-sm md:text-lg text-white">AO</p>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
