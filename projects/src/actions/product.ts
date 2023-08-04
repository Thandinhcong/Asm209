import { createAsyncThunk } from "@reduxjs/toolkit";
import instances from "../api";

export const listProducts = createAsyncThunk("products/fetchProducts", async () => {
    const { data }: any = await instances.get("/api/products");
    return data.products.docs;

})
export const deltailProduct = createAsyncThunk("products/fetchProducts", async () => {
    const { data }: any = await instances.get("/api/products/:id");
    console.log(' data detail ', data);

    return data.products.docs;

})