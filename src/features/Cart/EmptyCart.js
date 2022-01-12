import React from 'react';
import '../../css/EmptyCart.scss'
import EmptyGif from '../../assets/emptycart.gif'
const EmptyCart = () => {
    return (
        <div className='empty'>
            <div className='empty-container'>
                <div className='empty-imgContainer'>
                    <img src={EmptyGif} alt="empty" />
                </div>
                <div className='empty-textContainer'>
                    <span className='empty-textContainer__text'>NOT THING IN YOUR BAG , LET BUY SOMETHING </span>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;