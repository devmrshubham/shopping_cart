import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const Url = "http://localhost:5000"

export const getCartData = createAsyncThunk("getCartData", async () => {

    return await axios.get(`${Url}/product`)
        .then(
            (success) => {

                return success.data?.Data
            }
        ).catch(
            (error) => {
                return error
            }
        )


})

const CartReducer = createSlice(
    {
        name: "CartReducer",
        initialState: {
            cart: [],
            loading: false,
            error: null
        },
        extraReducers: {
            [getCartData.pending]: (state) => {
                state.loading = true
            },
            [getCartData.fulfilled]: (state, action) => {

                state.cart = action.payload
                state.loading = false
            },
            [getCartData.rejected]: (state, action) => {
                state.loading = false
                state.error = action.payload
            }
        }
    }
)

export default CartReducer.reducer