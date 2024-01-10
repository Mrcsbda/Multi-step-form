import { configureStore } from '@reduxjs/toolkit';
import { plan } from './slides/plan';
import { info } from './slides/info';


export const store = configureStore({
    reducer: {
        plan: plan.reducer,
        info: info.reducer
    }
});