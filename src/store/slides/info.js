import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formConfirmed: true,
    plan: "",
    price: ""
}

export const info = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setConfirmed: (state) => {
            state.confirmed = !true;
        },
        setPlan: (state, { payload: { plan, price }}) => {
            state.plan = plan;
            state.price = price
        }
    }
})

export const { setConfirmed, setPlan } = info.actions