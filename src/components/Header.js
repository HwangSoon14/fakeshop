import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/slice/userSlice";
import GitHub from "../assets/github.png";
import "../css/Header.scss";
import BasicMenu from "./BasicMenu";
const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector(state => state.cart.count);
  const user = useSelector(state => state.user.users);
  let hasUser = !!user.email;
  const handleLogOut = () => {
    dispatch(logout());
}
  return (
    <div className="header">
      <div className="header-logo" onClick={() => navigate("/")}>
        <img src={GitHub} alt="logo" />
        <span>Fake</span>
      </div>
      <div className="header-content">
        {hasUser ? <BasicMenu name={user.email} onLogOut={handleLogOut}/> : <Link to="/login" className="header__link">
          <span>Sign In</span>
        </Link> }
        <Link to="/cart" className="header__link">
          <Badge
            badgeContent={count}
            color="primary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <IconButton color="inherit" aria-label="add to shopping cart">
              <ShoppingCartIcon />
            </IconButton>
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Header;
