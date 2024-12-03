// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const initialState = {
//   loading: false,
//   product: [],
//   error: "",
// };

// const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
//   const res = fetch("https://fakestoreapi.com/products");
//   const result = res.json();
//   return result;
// });

// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       (state.loading = false),
//         (state.product = action.payload),
//         (state.error = "");
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       (state.loading = false),
//         (state.product = []),
//         (state.error = action.error.message);
//     });
//   },
// });
// export default productSlice.reducer
// export {fetchProducts}