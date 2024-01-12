import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formConfirmed: true,
    plan: "",
    price: "",
    addOns: []
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
        },
        setAddOns: (state, { payload }) => {
            const validate = state.addOns.find(item => item.name === payload.name)
            if(!validate) {
                state.addOns = [...state.addOns, payload]
            } else {
                state.addOns = state.addOns.filter(item => item.name !== payload.name)
            }
        }
    }
})

export const { setConfirmed, setPlan, setAddOns } = info.actions