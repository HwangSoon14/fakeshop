import React, { useState } from "react";
import "../../css/CartItem.scss";
import Quantity from "../../components/Quantity";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import Zoom from '@mui/material/Zoom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../app/slice/cartSlice";
import ModalConfirm from "../../components/ModalConfirm";
const CartItem = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    const onIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    }
    const onDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    }

  return (
    <div className="cartItem">
      <div className="cartItem-left">
        <div className="cartItem-imgContainer">
          <img src={item.image} alt={item.id} />
        </div>
        <div className="cartItem-textContainer">
          <span className="cartItem-textContainer__name">
            <span className="fw-500">Product: </span> {item.title}
          </span>
          <span className="cartItem-textContainer__name">
            <span className="fw-500">ID: </span> {item.id}
          </span>
          <span className="cartItem-textContainer__name">
            <span className="fw-500">Quantity: </span> {item.quantity}
          </span>
        </div>
      </div>
      <div className="cartItem-right">
        <div className="cartItem-right__quantity">
          <Quantity value={item.quantity} onIncrease={() => onIncreaseQuantity(item.id)} onDecrease={() => onDecreaseQuantity(item.id)}/>
        </div>
        <div className="cartItem-right__priceContainer">
          <span className="cartItem-right__price">${item.price}</span>
        </div>
        <div className="cartItem-right__trashContainer">
        <Tooltip title="Remove" TransitionComponent={Zoom}>
            <IconButton className="cartItem-right__icon" onClick={() => setOpen(prev => !prev)}>
                <DeleteForeverIcon />
            </IconButton>
        </Tooltip>
        <ModalConfirm open={open} handleClose={handleClose} onDelete={() => handleRemoveFromCart(item.id) }/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
// //onClick={() => handleRemoveFromCart(item.id)}