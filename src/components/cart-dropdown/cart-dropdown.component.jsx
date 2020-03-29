import React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";

// Selector
import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">your car is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// `connect` HC fires first and the result gets passed into `withRouter`
export default withRouter(connect(mapStateToProps)(CartDropdown));
