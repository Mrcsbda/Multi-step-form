import { configureStore } from '@reduxjs/toolkit';
import { plan } from './slides/plan';

export const store = configureStore({
    reducer: {
        plan: plan.reducer
    }
});