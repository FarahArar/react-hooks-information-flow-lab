import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import header from "./header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (

    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
