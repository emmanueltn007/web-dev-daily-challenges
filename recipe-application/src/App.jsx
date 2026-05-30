import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipeGrid from "./components/RecipeGrid";
import RecipePage from "./components/RecipePage";
import { Routes } from "react-router";
import { Route } from "react-router";

function App() {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/")
      .then((response) => response.json())
      .then((data) => {
        setRecipesData(data.recipes);
      });
  }, []);

  return (
    <div className="font-['Roboto Flex',sans-serif]">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <RecipeGrid recipesData={recipesData} />
            </>
          }
        />
        <Route path="/recipePage/:id" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
