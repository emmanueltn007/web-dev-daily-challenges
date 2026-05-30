import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App () {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/')
      .then(response => response.json())
      .then(recipesData => {
        setRecipesData(recipesData);
        console.log(recipesData);
      })
  }, []);

  return (
    <div className="font-['Roboto Flex',sans-serif]">
      <Header />
      <Hero />
    </div>
  );
}

export default App