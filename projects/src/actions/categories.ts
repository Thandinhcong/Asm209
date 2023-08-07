import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICate } from "../interfaces/categories";
import instances from "../api";

export const listCates = createAsyncThunk("categories/listCate", async () => {
    const { data }: any = await instances.get("/api/categories")
    return data;
})
export const addCate = createAsyncThunk("categories/addCate", async (cate: ICate) => {
    const data: ICate = await instances.post("/api/categories", cate)
    return data;
})
export const updateCate = createAsyncThunk("categories/updateCate", async (cate: ICate) => {
    const data: ICate = await instances.put("/api/categories/" + cate._id, cate)
    return data;
})
export const deleteCate = createAsyncThunk("categories/deleteCate", async (id: string | undefined) => {
    await instances.delete(`/api/categories/${id}`)
    return id;
})