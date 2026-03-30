import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// async function
export const fetchProducts = createAsyncThunk('products', async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  const jsonRes = await res.json();
  return jsonRes.products;
});

// create Slice
const initialState = {
  items: [],
  status: undefined,
  error: null, // Fixed typo from 'errro' to 'error'
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'Succeeded'; // Fixed the issue here with a semicolon
      state.items = action.payload;
    });
  },
});

export default productSlice.reducer;