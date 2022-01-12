import { Modal } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../app/slice/cartSlice";
import AddButton from "../../components/AddButton";
import CheckoutSuccess from "../../components/CheckoutSuccess";
import "../../css/Order.scss";
const Order = ({ totalPrice , handleOpen}) => {
  
  return (
    <div className="order">
      <div className="order-Container">
        <span className="order-summary">ORDER SUMMARY</span>
        <div className="order-textContainer">
          <span className="order__text">Subtotal</span>
          <span className="order__price">$ {totalPrice.toFixed(2)}</span>
        </div>
        <div className="order-textContainer">
          <span className="order__text">Estimated Shipping</span>
          <span className="order__price">$ 7.20</span>
        </div>
        <div className="order-textContainer">
          <span className="order__text">Shipping Discount</span>
          <span className="order__price">- $ 7.20</span>
        </div>
        <div className="order-textContainer">
          <span className="order__total">Total</span>
          <span className="order__totalPrice">$ {totalPrice.toFixed(2)}</span>
        </div>
        <div className="order-btnContainer">
          <AddButton text="CHECKOUT NOW" onClickButton={handleOpen} />
        </div>
      </div>
    </div>
  );
};
export default Order;
