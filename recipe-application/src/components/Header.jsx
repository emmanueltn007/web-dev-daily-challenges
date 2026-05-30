function Header () {
    return (
        <div className="flex items-center justify-between p-8">
            <div className="flex items-center">
                <img src="./images/mountain.png" alt="logo icon" />
                <h1 className="hidden md:block text-3xl">
                    Nuxtcipes
                </h1>
            </div>
            
            <button className="text-xl cursor-pointer">
                Home
            </button>
        </div>
    );
}

export default Header