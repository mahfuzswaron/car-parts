import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './Slices/loadingSlice'
import userSlice from './Slices/userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        loading: loadingSlice
    },
})