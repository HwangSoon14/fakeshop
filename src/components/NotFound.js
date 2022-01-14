import React from 'react';
import ErrorGif from '../assets/error.gif'
import '../css/NotFound.scss'
const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='notfound-container'>
                <div className='notfound-imgContainer'>
                    <img src={ErrorGif} alt='404'/>
                </div>
                <div className='notfound-textContainer'>
                    <span className='notfound__text'>SORRY ! PAGE NOT FOUND</span>
                </div>
            </div>
        </div>
    );
};

export default NotFound;