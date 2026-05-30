function Hero () {
    return (
        <section className="bg-gray-300 px-8 py-8 lg:px-32 flex flex-col lg:flex-row-reverse lg:items-center gap-4">
            <img loading="lazy" className="sm:w-80 md:w-88 lg:w-80 mx-auto" src="./images/nuxt-course-hero.avif" alt="Hero image" />
            <div className="max-lg:text-center flex flex-col max-md:items-center gap-4">
                <h1 className="text-4xl md:text-3xl lg:2xl font-light">
                    Master The Kitchen With Ease: Unleash Your Inner Chef Today!
                </h1>
                <p className="text-lg lg:sm">
                    Discover recipes helping you find the easiest way to cook.
                </p>
                <button className="bg-orange-400 px-4 py-2 text-white font-semibold rounded-md cursor-pointer max-lg:self-center md:w-1/4 lg:w-2/5 border-2 border-transparent hover:border-orange-400 hover:bg-transparent hover:text-orange-400 transition-all duration-300 ease-in-out">
                    Browse Recipes
                </button>
            </div>
        </section>
    );
}

export default Hero