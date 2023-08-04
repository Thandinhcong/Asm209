import { createSlice } from "@reduxjs/toolkit"
import { deltailProduct, listProducts } from "../actions/product";
import { IProduct } from "../interfaces/products";

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: IProduct[], isLoading: boolean, error: string }

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listProducts.pending, (state) => {
            state.isLoading = true
            state.error = ""
        })
        builder.addCase(listProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload;
        })
        builder.addCase(listProducts.rejected, (state) => {
            state.isLoading = false
            state.error = "Fail"
        })
        //detail



    }
})
export const productReducer = productSlice.reducer;