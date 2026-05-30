function Hero () {
    return (
        <section className="text-center bg-gray-300 p-16 flex flex-col gap-4">
            <img loading="lazy" src="https://cdn.dummyjson.com/recipe-images/5.webp" alt="" />
            <h1 className="text-3xl font-light">
                Master The Kitchen With Ease: Unleash Your Inner Chef Today!
            </h1>
            <p>
                Discover recipes helping you find the easiest way to cook.
            </p>
            <button className="bg-orange-400 px-4 py-2 text-white rounded-md cursor-pointer self-center">
                Browse Recipes
            </button>
        </section>
    );
}

export default Hero