import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './reducer/cartSlice'
import FilterSreachSlice from './reducer/filterSearchSlice'

const store = configureStore({
    reducer: {
        filterSearchText: FilterSreachSlice.reducer,
        carts: CartSlice.reducer,
    }
})

export default store
