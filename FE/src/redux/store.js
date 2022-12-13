import { configureStore } from '@reduxjs/toolkit';

import productModalReducer from './product-modal/productModalSlice';
import cartItemsSlice from './cart/cartSlide';

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsSlice,
    },
});
