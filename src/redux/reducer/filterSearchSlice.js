import { createSlice } from "@reduxjs/toolkit";

const FilterSreachSlice = createSlice({
    name: 'filerSearch',
    initialState:{
        search:''
    },
    reducers: {
        search: (state,action) =>{
            state.search = action.payload
        }
    }
})


export const {search}= FilterSreachSlice.actions

export default FilterSreachSlice