import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './slice.js'
import productsReducer from './productSlice.js'

export const store = configureStore({
  reducer:{
    card:cardReducer,
    products:productsReducer
  }
})