import { configureStore } from '@reduxjs/toolkit';

import productModalReducer from './product-modal/productModalSlice';

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
    },
});