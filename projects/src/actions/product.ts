import { createAsyncThunk } from "@reduxjs/toolkit";
import instances from "../api";

export const listProducts = createAsyncThunk("products/fetchProducts", async () => {
    const { data }: any = await instances.get("/api/products");
    return data?.products

})
export const deltailProduct = createAsyncThunk("products/fetchProducts", async (id: string | undefined) => {
    const { data } = await instances.get(`/api/products/${id}`);
    return data?.product;

})