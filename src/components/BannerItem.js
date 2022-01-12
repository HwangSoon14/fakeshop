import React from 'react';
import "../css/BannerItem.scss"
import MainButton from './MainButton';
const BannerItem = ({img, title, desc}) => {
    return (
        <div className='bnItem'>
            <div className='bnItem-img'>
                <img src={img} alt="logo" />
            </div>
            <div className='bnItem-content'>
            <div className='bnItem-contentWrapper'>
                <span className='bnItem-title'>{title}</span>
                <p className='bnItem-desc'>{desc}</p>
                <MainButton text="Shop Now"/>
            </div>
            </div>
        </div>
    );
};

export default BannerItem;