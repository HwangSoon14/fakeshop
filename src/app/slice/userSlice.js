import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from '../../api/userApi';
export const register = createAsyncThunk('user/register', async (payload) => {
        const data = await userApi.register(payload);
        localStorage.setItem('TOKEN' , data.data.idToken);
        let user =  {
            name: payload.userName,
            email: data.data.email,
        }
        localStorage.setItem('USER',JSON.stringify(user));
        localStorage.setItem('REFRESH_TOKEN', data.data.refreshToken);  
        return {
            name: payload.userName,
            email: data.data.email,
        };
    }
);
export const login = createAsyncThunk('user/login', async (payload) => {
        // call API to register
        const data = await userApi.login(payload);
       
        localStorage.setItem('TOKEN' , data.data.idToken);
        let user = {
            name: payload.userName,
            email: data.data.email,
        }
        localStorage.setItem('USER', JSON.stringify(user));
        localStorage.setItem('REFRESH_TOKEN', data.data.refreshToken);
        
        return {
            name: data.data.displayName,
            email: data.data.email,
        };
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: JSON.parse(localStorage.getItem("USER")) || {},
        setting: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            localStorage.removeItem("USER");
            localStorage.removeItem("TOKEN");
            localStorage.removeItem("REFRESH_TOKEN");

            state.users = {}
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
    },
});
const {actions , reducer} = userSlice;
export const { logout } = actions;
export default reducer;