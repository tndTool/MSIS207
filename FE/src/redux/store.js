import { configureStore } from '@reduxjs/toolkit';

import productModalReducer from './product-modal/productModalSlice';
import productListSlice from './product/productListSlice.js';
import cartItemsSlice from './cart/cartSlide';
import userLoginSlice from './user/userLoginSlice.js';
import userRegisterSlice from './user/userRegisterSlice.js';
import userUpdateSlice from './user/userUpdateSlice.js';
import userCheckoutSlice from './bill/userCheckoutSlice.js';

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsSlice,
        userLogin: userLoginSlice,
        userRegister: userRegisterSlice,
        userUpdate: userUpdateSlice,
        userCheckout: userCheckoutSlice,
        productList: productListSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
   }),
    preloadedState: initialState,
});
