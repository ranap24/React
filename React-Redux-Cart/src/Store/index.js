import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice.js';
import uiReducer from './UISlice.js';

const store = configureStore({
    reducer:{cart:cartReducer,ui:uiReducer}
});

export default store;
