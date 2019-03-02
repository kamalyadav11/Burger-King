import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorhandler/withErrorHandler";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    // purchasable: false,
    purchasing: false,
    loading: false,
    error: null
  };

  // componentDidMount() {
  //   axios
  //     .get("https://burgerking-54612.firebaseio.com/ingredients.json")
  //     .then(response => this.setState({ ingredients: response.data }))
  //     .catch(err => this.setState({ error: true }));
  // }

  updatePurchaseState = () => {
    // if (this.state.totalPrice > 5) {
    // this.setState({ purchasable: true });
    return this.state.totalPrice > 5;
    // }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ings}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.props.price}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    let burger = (
      <React.Fragment>
        <Burger ingredients={this.props.ings} />
        <BuildControls
          ingredientAdded={this.props.onIngredientAdded}
          ingredientremoved={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          price={this.props.price}
          purchasable={this.updatePurchaseState}
          ordered={this.purchaseHandler}
        />
      </React.Fragment>
    );

    if (!this.props.ings) {
      burger = this.state.error ? (
        <p>Ingredients can't be loaded</p>
      ) : (
        <Spinner />
      );
    }

    return (
      <>
        {this.state.purchasing ? (
          <Modal
            show={this.state.purchasing}
            modalClosed={this.purchaseCancelHandler}
          >
            {orderSummary}
          </Modal>
        ) : null}
        {burger}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: ingName =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
