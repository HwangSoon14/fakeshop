import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddButton from "../../../components/AddButton";
import Quantity from "../../../components/Quantity";
import RatingCpn from "../../../components/RatingCpn";
import "../../../css/ProductDetail.scss";
import { addToCart} from '../../../app/slice/cartSlice'
const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.products.products);
  const thisProduct = allProduct.find((x) => x.id === Number(productId));
  console.log(thisProduct);
  const [quantity , setQuantity] = useState(1);
  const addToCartFunc = (thisProduct) => {
    dispatch(addToCart({...thisProduct , quantity: quantity}));
  }
  const upDateQuantity = (newQuantity) => {
    console.log(newQuantity);
    setQuantity(newQuantity)
  }
  return (
    <div className="productDetail">
      <div className="productDetail-imgContainer">
        <img src={thisProduct.image} alt={thisProduct.id} />
      </div>
      <div className="productDetail-content">
        <span className="productDetail-content__title">
          {thisProduct.title}
        </span>
        <p className="productDetail-content__desc">{thisProduct.description}</p>
        <div className="productDetail-content__priceWrapper">
          <span className="productDetail-content__price">
            $ {thisProduct.price}
          </span>
          <RatingCpn value={thisProduct.rating.rate} />
        </div>
        <div className="productDetail-content__quantity">
            <Quantity upDateQuantity={upDateQuantity}/>
            <span>Hiện đang có sẵn {thisProduct.rating.count} sản phẩm.</span>
        </div>
        <AddButton text="ADD TO CART" onClickButton={() => addToCartFunc(thisProduct)}/>
      </div>
    </div>
  );
};

export default ProductDetail;
