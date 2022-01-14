import React, { Fragment } from 'react';
import '../../css/CartPage.scss';
import CartItem from './CartItem';
const CartList = ({list}) => {
    return (
        <>
        {list && list.map((item , idx) => (
            <Fragment key={idx}>
                <CartItem item={item}/>
            </Fragment>
        ))}   
        </>
    );
};

export default CartList;