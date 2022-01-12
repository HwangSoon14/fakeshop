import React from "react";
import SuccessGif from "../assets/success.gif";
import "../css/CheckoutSuccess.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
const CheckoutSuccess = ({onClose}) => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-imgContainer">
          <img src={SuccessGif} alt="purchase" />
        </div>
        <div className="checkout-textContainer">
          <span className="checkout__span">CHECKOUT SUCCESSFULLY !</span>
        </div>
      <div className="checkout-iconContainer">
        <IconButton onClick={onClose}>
          <CancelIcon fontSize="large" />
        </IconButton>
      </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
