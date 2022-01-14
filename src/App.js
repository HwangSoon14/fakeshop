
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import categoryApi from './api/categoryApi';
import productApi from './api/productApi';
import './App.scss';
import { saveAllCategory, saveAllProduct } from './app/slice/productSlice';
import Deals from './components/Deal';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminPage from './features/Admin/pages/AdminPage';
import ProductDetail from './features/Product/pages/ProductDetail';
import User from './features/User/User';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';


function App() {
  const [isLoading , setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fecthData = async () => {
      setIsLoading(true);
      const data = await productApi.getAll();
      const dataCategory = await categoryApi.getAllCategory();
      const response = data.data;
      const responseCategory = dataCategory.data;
      dispatch(saveAllCategory(responseCategory));
      dispatch(saveAllProduct(response));
      setIsLoading(false);
    };
    fecthData();
  }, []);
  
  
  return (
    <div className="App">
      <Deals />
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage isLoading={isLoading}/>}/>
        <Route path="/product/:productId" exact element={<ProductDetail />} />
        <Route path="/cart" exact element={<CartPage />}/>
        <Route path="/login" exact element={<User />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
