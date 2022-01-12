import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categories: [],
    },
    reducers: {
        saveAllCategory: (state, action) => {
            const allCategory = action.payload;
            state.categories = [...allCategory];
        },
        saveAllProduct: (state,action) => {
            const allProduct = action.payload;
            state.products = [...allProduct];
        },     
        filterCategory: (state ,action) => {
            const newProductsArray = state.products.filter(x => x.category === action.payload);
            state.products = [...newProductsArray];
        }
    },
});
const {actions , reducer} = productSlice;
export const {saveAllProduct , filterCategor , saveAllCategory} = actions;
export default reducer;