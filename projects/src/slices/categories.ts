import { createSlice } from "@reduxjs/toolkit";
import { ICate } from "../interfaces/categories";
import { addCate, deleteCate, updateCate } from "../actions/categories";


const initialState = {
    Categorys: [],
    isLoading: false,
    error: ""
} as {
    Categorys: ICate[],
    isLoading: boolean,
    error: string
}

const CateSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //add
        builder.addCase(addCate.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addCate.fulfilled, (state, action) => {
            state.isLoading = false,
                state.Categorys.push(action.payload)
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
            state.Categorys = state.Categorys.map((item: ICate) =>
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
            const id = action.payload;
            state.Categorys = state.Categorys.filter((item: any) =>
                item._id !== id);
        })
        builder.addCase(deleteCate.rejected, (state) => {
            state.error = "fail rồi"
        })
    }
})
export const cateReducer = CateSlice.reducer;