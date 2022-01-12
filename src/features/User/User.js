import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
const User = () => {
    const [isLogin , setIsLogin] = useState(true);
    const onSwap = (swap) => {
        setIsLogin(swap);
    }
    return (
        (isLogin) ? <SignIn onSwap={onSwap} /> : <SignUp onSwap={onSwap}/>
    );
};

export default User;