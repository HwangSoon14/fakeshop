import { Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../app/slice/cartSlice";
import AddButton from "../components/AddButton";
import CheckoutSuccess from "../components/CheckoutSuccess";
import ModalConfirm from "../components/ModalConfirm";
import "../css/CartPage.scss";
import CartList from "../features/Cart/CartList";
import EmptyCart from "../features/Cart/EmptyCart";
import Order from "../features/Cart/Order";
const CartPage = () => {
  
  let navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.products);
  const count = useSelector((state) => state.cart.count);
  const totalPrice = cartList.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const dispatch = useDispatch();
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setOpen(true);
    dispatch(resetCart());
  } 
  const handleCloseConfirmModal = () => setOpenConfirm(false);
  const handleClose = () => setOpen(false);
  const handleResetItem = () => {
    dispatch(resetCart())
  }
  return (
    <div className="cart">
      <div className="cart-titleContainer">
        <span className="cart__title title">YOUR BAG</span>
      </div>
      <div className="cart-btnContainer">
        <div className="cart-btnContainer-item">
          <AddButton
            text="CONTINUE SHOPPING"
            onClickButton={() => navigate("/")}
          />
        </div>
        <div className="cart-btnContainer-item">
          <span className="cart-btnContainer__span">
            Shopping Bag ({count})
          </span>
        </div>
        <div className="cart-btnContainer-item">
          <AddButton
            text="RESET BAG"
            onClickButton={() => setOpenConfirm(prev => !prev)}
            disable={(cartList.length === 0) ? true : false}
          />
        </div>
      </div>
      {cartList.length > 0 ? (
        <div className="cart-content">
          <div className="cart-productContainer">
            <CartList list={cartList} />
          </div>
          <div className="cart-order">
            <Order totalPrice={totalPrice} handleOpen={handleOpen}/>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      <Modal open={open}>
        <div>
          <CheckoutSuccess onClose={handleClose} />
        </div>
      </Modal>
      <ModalConfirm open={openConfirm} handleClose={handleCloseConfirmModal} onDelete={handleResetItem}/>
    </div>
  );
};

export default CartPage;
