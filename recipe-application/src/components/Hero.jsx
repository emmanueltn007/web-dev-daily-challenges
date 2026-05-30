function Hero () {
    return (
        <section className="text-center bg-gray-300 px-8 py-8 lg:px-32 flex flex-col gap-4">
            <img loading="lazy" src="https://cdn.dummyjson.com/recipe-images/5.webp" alt="" />
            <h1 className="text-4xl md:text-3xl lg:2xl font-light">
                Master The Kitchen With Ease: Unleash Your Inner Chef Today!
            </h1>
            <p className="text-lg lg:sm">
                Discover recipes helping you find the easiest way to cook.
            </p>
            <button className="bg-orange-400 px-4 py-2 text-white font-semibold rounded-md cursor-pointer self-center border-2 border-transparent hover:border-orange-400 hover:bg-transparent hover:text-orange-400 transition-all duration-300 ease-in-out">
                Browse Recipes
            </button>
        </section>
    );
}

export default Hero