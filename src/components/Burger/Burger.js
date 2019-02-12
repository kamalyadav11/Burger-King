import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients) //converting object to array
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

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>Please start adding ingredient to your Burger</p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
