import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../app/slice/productSlice'
import cartSlice from '../app/slice/cartSlice'
import userSlice from './slice/userSlice'
const rootReducer = {
    products: productSlice,
    cart: cartSlice,
    user: userSlice,
}
const store = configureStore({
    reducer: rootReducer,
});

export default store