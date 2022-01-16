import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/TooltipContainer.scss";
const TooltipItem = () => {
  let navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.products);
  const count = useSelector((state) => state.cart.count);
  const [cartListLimit, setCartListLimit] = useState([]);
  const totalPrice = cartList.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  useEffect(() => {
    if (cartList.length > 0) {
      if (cartList.length === 1) setCartListLimit([cartList[0]]);
      else if (cartList.length === 2)
        setCartListLimit([cartList[0], cartList[1]]);
      else if (cartList.length === 3)
        setCartListLimit([cartList[0], cartList[1], cartList[2]]);
      else {
        setCartListLimit([cartList[0], cartList[1], cartList[2]]);
      }
    } else {
      setCartListLimit([]);
    }
  }, [cartList.length, cartList]);
  return (
    <div className="tooltip">
      <div className="tooltip-titleContainer">
        <span className="tooltip__title">Túi Đồ ({count})</span>
      </div>
      {cartListLimit &&
        cartListLimit.map((item, idx) => (
          <div key={idx} className="tooltipItem">
            <div className="tooltipItem-left">
              <img src={item?.image} alt="img" />
            </div>
            <div className="tooltipItem-right">
              <span className="tooltipItem__text ">{item?.title}</span>
              <span className="tooltipItem__text">
                <span className="fw-500">Quantity:</span> {item?.quantity}
              </span>
              <span className="tooltipItem__text">
                <span className="fw-500">Price:</span> {item?.price}$
              </span>
            </div>
          </div>
        ))}
      {cartListLimit.length > 0 && (
        <div className="tooltip-titleContainer">
          <span className="tooltip__title">
            Tổng tiền:{" "}
            <span className="tooltip__grayColor">{totalPrice.toFixed(2)}$</span>
          </span>
        </div>
      )}
      {cartListLimit.length === 3 && (
        <div className="tooltip-btnContainer">
          <Button
            fullWidth
            className="font-roboto"
            onClick={() => navigate("/cart")}
          >
            Xem Chi Tiết
          </Button>
        </div>
      )}
    </div>
  );
};

export default TooltipItem;
