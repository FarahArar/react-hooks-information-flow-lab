import react from "react";

function filter (){
return ( 
    <button
    className={isInCart ? "remove" : "add"}
    onClick={handleAddToCartClick}
  >
    {isInCart ? "Remove From" : "Add to"} Cart
  </button>
)


}

export default filter;