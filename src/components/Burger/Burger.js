import React from "react";

import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients) //converting object to array
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //returning array of value of the type of the ingredient
        return <BurgerIngredient key={i + igKey} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      //reducing array of arrays to a single array
      return arr.concat(el);
    }, []);
  console.log(transformedIngredients);

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
