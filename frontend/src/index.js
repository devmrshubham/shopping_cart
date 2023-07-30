import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import CartData from "./feature/CartReducer"
import CartValue from "./feature/AddToCart"



const store = configureStore({
  reducer: {
    app: CartData,
    Cart: CartValue

  }
})



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

)