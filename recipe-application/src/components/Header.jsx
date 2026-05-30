function Header () {
    return (
        <div className="flex items-center justify-between px-8 py-8 lg:px-32">
            <div className="flex items-center">
                <img src="./images/mountain.png" alt="logo icon" />
                <h1 className="hidden md:block text-3xl">
                    Nuxtcipes
                </h1>
            </div>
            
            <button className="text-lg lg:sm cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out font-semibold px-4 py-1 rounded-md">
                Home
            </button>
        </div>
    );
}

export default Header