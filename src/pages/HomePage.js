import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from '../components/Banner'
import ListPage from '../features/Product/pages/ListPage';
const HomePage = ({isLoading}) => {
    return (
        <>
         <Banner/>   
         <ListPage isLoading={isLoading}/>
        </>
    );
};

export default HomePage;