import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const AddToCart = createSlice({
    name: "AddToCart",
    initialState: {
        CartItem: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        CartTotalQuantity: 0,
        CartTotalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.CartItem[itemIndex].cartQty += 1

                toast.info(`incriased ${state.CartItem[itemIndex].name} cart quantity`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = { ...action.payload, cartQty: 1 }
                state.CartItem.push(tempProduct);
                toast.success(`${action.payload.name} added to cart `, {
                    position: "bottom-left"
                })


            }

            localStorage.setItem("cartItems", JSON.stringify(state.CartItem))




        },
        removeFromCart: (state, action) => {
            const nextCartItem = state.CartItem.filter((cartItem) =>
                cartItem.id !== action.payload.id
            )

            state.CartItem = nextCartItem
            localStorage.setItem("cartItems", JSON.stringify(state.CartItem))
            toast.error(`${action.payload.name} remove from cart `, {
                position: "bottom-left"
            })

        },
        decreaseCart: (state, action) => {
            const itemIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)
            if (state.CartItem[itemIndex].cartQty > 1) {
                state.CartItem[itemIndex].cartQty -= 1
                toast.info(`Decriased ${state.CartItem[itemIndex].name} cart quantity`, {
                    position: "bottom-left"
                })
            } else if (state.CartItem[itemIndex].cartQty === 1) {
                const nextCartItem = state.CartItem.filter((cartItem) =>
                    cartItem.id !== action.payload.id
                )

                state.CartItem = nextCartItem

                toast.error(`${action.payload.name} remove from cart `, {
                    position: "bottom-left"
                })

            }

            localStorage.setItem("cartItems", JSON.stringify(state.CartItem))
        },
        clearCart: (state, action) => {
            state.CartItem = [];
            toast.error(`clear cart `, {
                position: "bottom-left"
            })
            localStorage.setItem("cartItems", JSON.stringify(state.CartItem))

        },
        getTotal: (state, action) => {
            let { Total, quantity } = state.CartItem.reduce((cartTotal, cartItem) => {
                const { price, cartQty } = cartItem;
                const TotalItem = price * cartQty
                cartTotal.Total += TotalItem
                cartTotal.quantity += cartQty

                return cartTotal
            }, {
                Total: 0,
                quantity: 0
            })

            state.CartTotalQuantity = quantity;
            state.CartTotalAmount = Total
        }

    },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } = AddToCart.actions;
export default AddToCart.reducer;
