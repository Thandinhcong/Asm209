import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICate } from "../interfaces/categories";
import instances from "../api";

export const addCate = createAsyncThunk("categories/addCate", async (cate: ICate) => {
    const data: ICate = await instances.post("/api/categories", cate)
    return data;
})
export const updateCate = createAsyncThunk("categories/updateCate", async (cate: ICate) => {
    const data: ICate = await instances.put("/api/categories/" + cate._id, cate)
    return data;
})
export const deleteCate = createAsyncThunk("categories/deleteCate", async (id: string | undefined) => {
    const data: ICate = await instances.delete("/api/categories/" + id)
    return data;
})