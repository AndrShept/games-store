import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import itemInfoSlice from './slice/itemInfoSlice'


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        info: itemInfoSlice
    }
})