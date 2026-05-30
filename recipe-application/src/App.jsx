import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipesGrid from "./components/RecipesGrid";

function App () {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/')
      .then(response => response.json())
      .then(data => {
        setRecipesData(data.recipes);
        console.log(data.recipes);
      })
  }, []);

  return (
    <div className="font-['Roboto Flex',sans-serif]">
      <Header />
      <Hero />
      <RecipesGrid recipesData={recipesData} />
    </div>
  );
}

export default App