import React, { Fragment } from 'react';
import '../../../css/ProductList.scss';
import ProductItem from './ProductItem';
const ProductList = ({list }) => {
    

    return (
        <div className='productList'>
        {list && list.map((item, idx) => (
        <Fragment key={idx}>
        <ProductItem  item={item} />
        </Fragment>            
        ))}        
        </div>
    );
};

export default ProductList;