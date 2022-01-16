import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../css/ScrollToTopButton.scss'
const ScrollToTopButton = (props) => {
    return (
        <div className='scrollBtn' onClick={props.onClick}>
            <ArrowUpwardIcon htmlColor='white'/>
        </div>
    );
};

export default ScrollToTopButton;