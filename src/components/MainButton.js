import React from 'react';
import '../css/MainButton.scss'
const MainButton = ({text}) => {
    return (
            <div className='mainBtn'>
            <span className='mainBtn-text'>{text}</span>
            </div>
    );
};

export default MainButton;