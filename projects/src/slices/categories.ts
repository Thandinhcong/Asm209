import { createSlice } from "@reduxjs/toolkit";
import { ICate } from "../interfaces/categories";
import { addCate, deleteCate, listCates, updateCate } from "../actions/categories";


const initialState = {
    categories: [],
    isLoading: false,
    error: ""
} as {
    categories: ICate[],
    isLoading: boolean,
    error: string
}

const CateSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //list
        builder.addCase(listCates.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(listCates.fulfilled, (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        })
        builder.addCase(listCates.rejected, (state) => {
            state.error = "fail rồi"
        })
        //add
        builder.addCase(addCate.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addCate.fulfilled, (state, action) => {
            state.isLoading = false
            state.categories.push(action.payload)
        })
        builder.addCase(addCate.rejected, (state) => {
            state.error = "fail rồi"
        })
        // update
        builder.addCase(updateCate.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateCate.fulfilled, (state, action) => {
            state.isLoading = false;
            const category = action.payload;
            state.categories = state.categories.map((item: ICate) =>
                item._id === category._id ? category : item);
        })
        builder.addCase(updateCate.rejected, (state) => {
            state.error = "fail rồi"
        })

        //dlete
        builder.addCase(deleteCate.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteCate.fulfilled, (state, action) => {
            state.isLoading = false;
            if (Array.isArray(state.categories)) {
                state.categories = state.categories.filter((item: any) => item._id !== action.payload);
            }
        })
        builder.addCase(deleteCate.rejected, (state) => {
            state.error = "fail rồi"
        })
    }
})
export const cateReducer = CateSlice.reducer;