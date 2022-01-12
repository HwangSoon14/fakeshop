import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import categoryApi from "../../../api/categoryApi";
import productApi from "../../../api/productApi";
import { saveAllProduct } from "../../../app/slice/productSlice";
import TextAnimation from "../../../components/TextAnimation";
import "../../../css/ListPage.scss";
import Categories from "../components/Categories";
import FilterByPrice from "../components/FilterByPrice";
import FilterByRating from "../components/FilterByRating";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSkeletonText from "../components/ProductSkeletonText";
const ListPage = ({isLoading}) => {
  const list = useSelector(state => state.products.products);
  const listCategory = useSelector(state => state.products.categories);
  const dispatch = useDispatch();
  const [currentList , setCurrentList] = useState([]);
  
 
  const onCategoryChange = (cate) => {
    const newArray = list.filter((x) => x.category === cate);
    setCurrentList(newArray);
  };
  const handleGetAllProduct = () => {
    setCurrentList(list);
  };
  useEffect(() => {
    setCurrentList(list);
  }, [list])
  const onFilterByPrice = (check) => {
    let newList = [...currentList];
    if(check === 20) newList.sort((x,y) => y.price - x.price);
    else newList.sort((x,y) => x.price - y.price);
    setCurrentList(newList);
  };
  const onFilterByRating = (check) => {
    let newList = [...currentList];
    if(check === 20) newList.sort((x,y) => y.rating.rate - x.rating.rate);
    else newList.sort((x,y) => x.rating.rate - y.rating.rate);
    setCurrentList(newList);
  };
  const onFilterByDate = (check) => {
    let newList = [...currentList];
    if(check === 20) newList.sort((x,y) => y.id - x.id);
    else newList.sort((x,y) => x.id - y.id);
    setCurrentList(newList);
  };
  return (
    <>
      <div className="lp-titleContainer">
        <TextAnimation />
      </div>
      <div className="filter">
        <FilterByPrice onChange={onFilterByPrice} />
        <FilterByRating onChange={onFilterByRating} />
      </div>
      <div className="lp">
        <div className="lp-left">
          {isLoading ? (
            <ProductSkeletonText length={6} />
          ) : (
            <Categories
              onChange={onCategoryChange}
              listCategory={listCategory}
              handleGetAllProduct={handleGetAllProduct}
            />
          )}
          {isLoading ? (
            <ProductSkeletonText length={3} />
          ) : (
            <>
              <div className="lp-date">
                <p className="lp-date__title">NGÀY RA MẮT</p>
                <span onClick={() => onFilterByDate(1)}>GẦN ĐÂY</span>
                <span onClick={() => onFilterByDate(20)}>NĂM TRƯỚC</span>
                <span></span>
              </div>
            </>
          )}
        </div>
        <div className="lp-right">
          {isLoading ? (
            <ProductSkeletonList length={12} />
          ) : (
            <ProductList list={currentList} />
          )}
        </div>
      </div>
    </>
  );
};

export default ListPage;
