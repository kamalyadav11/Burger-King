import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorhandler/withErrorHandler";

const INGREDIENT_PRICE = {
  salad: 0.4,
  cheese: 1,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  updatePurchaseState = () => {
    if (this.state.totalPrice > 5) {
      this.setState({ purchasable: true });
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name: "Kamal Yadav",
        address: {
          street: "Test Street",
          country: "India"
        },
        email: "test@test.com"
      },
      deleiveryMethod: "fastest"
    };

    axios
      .post("/orders", order)
      .then(() => this.setState({ loading: false, purchasing: false }))
      .catch(() => this.setState({ loading: false, purchasing: false }));
  };

  addIngredietHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState();
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState();
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <div>
          {this.state.purchasing ? (
            <Modal
              show={this.state.purchasing}
              modalClosed={this.purchaseCancelHandler}
            >
              {orderSummary}
            </Modal>
          ) : null}
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
            ingredientAdded={this.addIngredietHandler}
            ingredientremoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </div>
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
