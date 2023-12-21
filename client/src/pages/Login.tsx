const Login = () => {
    return (
        <div className="h-screen bg-white">
            <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-4xl">
                <div className="pb-4 md:pb-8 flex justify-between items-center">
                    <div className="py-3 md:py-5 text-2xl md:text-4xl font-bold">
                        <span className="text-[#F2BA52]">!dea</span>Pad
                    </div>
                </div>

                <div className="pt-4 md:pt-8">
                    <h1 className="text-3xl font-bold">Log in</h1>

                    <input type="text" placeholder="Email" />
                </div>
            </div>
        </div>
    )
}

export default Login
