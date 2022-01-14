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
        },
        addNewProduct: (state, action) => {
            const {item} = action.payload;
            const newItem = {
                category: item.category,
                description: item.desc,
                id: item.id,
                image: item.image,
                price: item.price,
                rating: {
                    rate: item.rate,
                    count: item.count,
                },
                title: item.title,
            }
            state.products.push(newItem);
            const thisIndex = state.categories.findIndex(x => x === item.category);
            if(thisIndex === -1) {
                state.categories.push(item.category);
            }
        },
        deleteProduct: (state , action) => {
            const id = action.payload;
            const thisIndex = state.products.findIndex(x => x.id === id);
            state.products.splice(thisIndex , 1);
        },
        updateProduct: (state, action) => {
            console.log(action.payload);
            const {id , value} = action.payload;
            const thisIndex = state.products.findIndex(x => x.id === id);
            const newProduct = {
                ...state.products[thisIndex],
                description: value.desc,
                image: value.image,
                price: value.price,
                title: value.title,
            }
            state.products[thisIndex] = {...newProduct};
        },
        
    },
});
const {actions , reducer} = productSlice;
export const {saveAllProduct , filterCategory , saveAllCategory , addNewProduct , deleteProduct , updateProduct} = actions;
export default reducer;