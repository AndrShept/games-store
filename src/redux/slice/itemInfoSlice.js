import { createSlice } from '@reduxjs/toolkit';



const itemsInfoSlice = createSlice({
    name: 'info',
    initialState: {
        itemsInfo: JSON.parse(localStorage.getItem('itemInfo')) || null
    },
    reducers: {
        setItemsInfo: (state, action) => {
            state.itemsInfo = action.payload
            
        }

    }
})

export const {setItemsInfo} = itemsInfoSlice.actions

export default itemsInfoSlice.reducer