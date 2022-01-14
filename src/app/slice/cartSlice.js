import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        count: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const thisIndex = state.products.findIndex(x => x.id === item.id);
            console.log(thisIndex);
            if(thisIndex >= 0) {
                state.products[thisIndex].quantity += item.quantity;
            }
            else {
                state.products.push(item);
            }
            state.count += item.quantity;
        },
        removeFromCart: (state , action) => {
            const id = action.payload;
            const thisIndex = state.products.findIndex(x => x.id === id);
            state.count--;
            state.products.splice(thisIndex , 1);
        },
        increaseQuantity: (state, action) => {
            const id  = action.payload;
            const thisIndex = state.products.findIndex(x => x.id === id);
            if(thisIndex >= 0) {
                state.products[thisIndex].quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const id  = action.payload;
            const thisIndex = state.products.findIndex(x => x.id === id);
            if(thisIndex >= 0)
            {
                if(state.products[thisIndex].quantity === 1) {
                    return;
                }
                else {
                state.products[thisIndex].quantity -= 1;
                }
            }
        },
        resetCart: (state) => {
            state.products = [];
            state.count = 0;
        }
    },
});
const {actions , reducer} = cartSlice;
export const {addToCart , removeFromCart , increaseQuantity , decreaseQuantity , resetCart} = actions;
export default reducer;