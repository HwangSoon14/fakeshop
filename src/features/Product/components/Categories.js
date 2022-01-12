import React from "react";
import "../../../css/Categories.scss";
const Categories = ({onChange, listCategory ,handleGetAllProduct}) => {
  const handleCategoryChange = (cate) => {
    if(!onChange) return;
    onChange(cate);
  }
  const handleGetAllCategory = () => {
      if(!handleGetAllProduct) return;
      handleGetAllProduct();
  }
  return (
    <div className="category">
        
          <p>DANH MỤC SẢN PHẨM</p>
          <span onClick={handleGetAllCategory}>TẤT CẢ DANH MỤC</span>
          {listCategory &&
            listCategory.map((item, idx) => (
              <span key={idx} onClick={() => handleCategoryChange(item)}>
                {item.toUpperCase()}
              </span>
            ))}
    </div>
  );
};

export default Categories;
