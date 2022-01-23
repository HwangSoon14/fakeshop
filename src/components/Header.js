import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/slice/userSlice";
import GitHub from "../assets/github.png";
import "../css/Header.scss";
import BasicMenu from "./BasicMenu";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TooltipContainer from "./TooltipContainer";

const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.count);
  const user = useSelector((state) => state.user.users);
  let hasUser = !!user.email;
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };
  useEffect(() => {
    if (user.email === "admin@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user.email]);
  return (
    <div className="header">
      <div className="header-logo">
        <div onClick={() => navigate("/")} className="header-logo__wrapper">
          <img src={GitHub} alt="logo" />
          <span>Fake</span>
        </div>
      </div>
      <div className="header-content">
        {isAdmin && (
          <Link to="/admin" className="header__link">
            <div className="header__flex">
              <span>ADMIN</span>
              <AdminPanelSettingsIcon />
            </div>
          </Link>
        )}
        {hasUser ? (
          <BasicMenu name={user.email} onLogOut={handleLogOut} />
        ) : (
          <Link to="/login" className="header__link">
            <span>Sign In</span>
          </Link>
        )}
        <div className="header__tooltip">
          <Link to="/cart" className="header__link" >
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
          <TooltipContainer />
        </div>
      </div>
    </div>
  );
};

export default Header;
