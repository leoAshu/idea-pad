import useAuthContext from '../hooks/useAuthContextHook'

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuthContext()
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-10 select-none">
            <div className="max-w-7xl flex justify-between items-center sm:px-8 px-4 mx-auto">
                <div className="py-5 text-4xl font-bold">
                    <span className="text-[#F2BA52]">!dea</span>Pad
                </div>

                {isLoggedIn && (
                    <div
                        className="bg-[#F2BA52] rounded-full w-14 h-14 flex justify-center items-center cursor-pointer"
                        onClick={() => setIsLoggedIn(false)}
                    >
                        <p className="font-semibold text-lg text-white">AO</p>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
