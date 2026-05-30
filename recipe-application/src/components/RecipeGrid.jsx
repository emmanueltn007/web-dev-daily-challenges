import { useNavigate } from "react-router";
import MealQuickInfo from "./grid-components/MealQuickInfo";

function RecipeGrid ({ recipesData }) {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col gap-4 px-8 py-8 lg:px-32">
            <div className="flex flex-col gap-2">
                <h3 className="text-4xl md:text-3xl font-light">
                    Discover, Create, Share
                </h3>
                <p className="text-lg lg:text-sm">
                    Check out our most popular recipes!
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {recipesData.map((recipe) => {
                    return (
                        <div key={recipe.id} className="text-lg lg:text-sm rounded-md overflow-hidden shadow-md shadow-gray-500">
                            <img loading="lazy" src={recipe.image} alt={`${recipe.name}'s image`} />
                            <div className="p-4">
                                <span>
                                    {recipe.name}
                                </span>
                                <MealQuickInfo recipe={recipe} />
                                <button onClick={() => navigate(`/recipePage/${recipe.id}`)} className="bg-orange-400 text-white font-semibold rounded-md px-4 py-1 mt-4 cursor-pointer border-2 border-transparent hover:bg-transparent hover:text-orange-400 hover:border-orange-400 transition-all duration-300 ease-in-out">
                                    View
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default RecipeGrid