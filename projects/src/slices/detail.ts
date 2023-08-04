
import { createSlice } from '@reduxjs/toolkit';
import { deltailProduct } from '../actions/product';
import { IProduct } from "../interfaces/products";
const initialState = {
    product: {},
    isLoading: false,
    error: "",
} as { product: IProduct, isLoading: boolean, error: string }

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deltailProduct.pending, (state) => {
                state.isLoading = true;
                state.error = "null";
            })
            .addCase(deltailProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(deltailProduct.rejected, (state) => {
                state.isLoading = false;
                state.error = "fail"
            });
    },
});

export const detailProduct = productSlice.reducer;
