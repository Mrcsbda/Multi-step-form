import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    MONTHLY: true
}

export const plan = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        setMonthly: (state) => {
            state.MONTHLY = !state.MONTHLY;
        }
    }
})

export const { setMonthly } = plan.actions