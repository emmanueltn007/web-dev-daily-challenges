import { useState, useEffect } from "react";
import Header from "./components/Header";

function App () {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/')
      .then(response => response.json())
      .then(recipesData => {
        setRecipesData(recipesData);
      })
  }, []);

  return (
    <div className="font-['Roboto Flex',sans-serif]">
      <Header />
    </div>
  );
}

export default App