import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formConfirmed: false,
    plan: "",
    price: "",
    addOns: []
}

export const info = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setFormConfirmed: (state) => {
            state.formConfirmed = true;
        },
        setPlan: (state, { payload: { plan, price } }) => {
            state.plan = plan;
            state.price = price
        },
        setAddOns: (state, { payload }) => {
            const validate = state.addOns.find(item => item.name === payload.name)
            if (!validate) {
                state.addOns = [...state.addOns, payload]
            } else {
                state.addOns = state.addOns.filter(item => item.name !== payload.name)
            }
        },
        setPrices: (state, { payload: { MONTHLY } }) => {
            if (!MONTHLY && state.price % 10 !== 0) {
                state.price = state.price * 10
                state.addOns = state.addOns.map(item => (
                    {
                        name: item.name,
                        price: item.price * 10
                    }
                ))
            } else {
                state.price = state.price / 10
                state.addOns = state.addOns.map(item => (
                    {
                        name: item.name,
                        price: item.price / 10
                    }
                ))
            }
        }
    }
})

export const { setFormConfirmed, setPlan, setAddOns, setPrices } = info.actions