import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../API/httpRequets";

const CartSlice = createSlice({
    name: 'carts',
    initialState: {
        cart: [],
    },

    extraReducers: (builder) => {
        builder  
            // get
            .addCase(getCart.fulfilled, (state, action)=>{
                state.cart = action.payload
            })
            // add
            .addCase(addCart.fulfilled,(state, action)=>{
                // // check if the product is duplicated
                let checkProduct = state.cart.find(item => 
                    item.idProducts === action.payload.idProducts
                )
                if(checkProduct===undefined){
                    state.cart.push(action.payload)
                }
                else{
                    checkProduct.quantity += Number(action.payload.quantity)
                }
            })

            //eidt 
            .addCase(editCart.fulfilled, (state, action)=>{
                let checkProduct = state.cart.find(item => 
                    item.idProducts === action.payload.idProducts
                )
                checkProduct.quantity = action.payload.quantity
                checkProduct.total = action.payload.total
            })
            //delete
            .addCase(delCart.fulfilled, (state, action)=>{
                console.log(action)
                state.cart = state.cart.filter(item =>
                    item.idProducts !== action.payload.idProducts
                )
            })

    }
})

// get api  cart
export const getCart = createAsyncThunk("carts/getCart", async()=>{
    try{
        const res = await httpRequest.get('/cart');
        return res.data;
    }
    catch(err){
        console.log('get',err)
    }
});
// add api cart
export const addCart = createAsyncThunk('carts/addCart', async(data)=>{
    try{
        const res = await httpRequest.post('/cart',data);
        return res.data;
    }catch(err){
        console.log('add',err)
    }
})

//edit api cart
export const editCart = createAsyncThunk('carts/editCart', async(data)=>{
    try{
        const res = await httpRequest.put(`/cart/${data.id}`,{
            quantity: data.newQuantity,
            total: data.newTotal
        });
        return res.data;
    }catch(err){
        console.log('edit',err)
    }
})

// delete api cart
export const delCart = createAsyncThunk('carts/delCart', async(id)=>{
    try{
        const res = await httpRequest.delete(`/cart/${id}`);
        return res.data;
    }catch(err){
        console.log('del',err)
    }
})

export default CartSlice
