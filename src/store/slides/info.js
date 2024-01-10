import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formConfirmed: true
}

export const info = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setConfirmed: (state) => {
            state.confirmed = !true;
        }
    }
})

export const { setConfirmed } = info.actions