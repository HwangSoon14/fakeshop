import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Rating } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../../app/slice/cartSlice";
import AddButton from "../../../components/AddButton";
import "../../../css/ProductItem.scss";
const ProductItem = ({ key, item }) => {
  const dispatch = useDispatch();
  const hasUser = !!useSelector(state => state.user.users.email);
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickAddButton = (item) => {
    if(hasUser) {
      dispatch(addToCart({...item, quantity: 1}));
    }
    else {
      enqueueSnackbar('You have to login first.' , {variant: 'warning'})
    }
  }
  const handleNavigateToDetailPage = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className="productItem">
      <div className="productItem-imgContainer" onClick={handleNavigateToDetailPage}>
        <img src={item.image} alt={item.id} />
        <div className="productItem-over">
          <Link to={`/product/${item.id}`}>
            <ArrowCircleRightIcon
              className="productItem-over__icon"
              fontSize="large"
            />
          </Link>
        </div>
      </div>
      <div className="productItem-content" onClick={handleNavigateToDetailPage}>
        <p className="productItem-content__title">{item.title}</p>
        <div className="productItem-content__desc">
          <span className="productItem-content__price">${item.price}</span>
          <Rating name="read-only" value={item.rating.rate} readOnly />
        </div>
        <span></span>
      </div>
      <div className="productItem-below">
        <AddButton onClickButton={() => handleClickAddButton(item)} text="ADD TO CART"/>
      </div>
    </div>
  );
};

export default ProductItem;
