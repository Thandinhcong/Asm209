import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICate } from "../../interfaces/categories";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (build) => ({
    getCategories: build.query<ICate[], void>({
      query: () => "categories",
    }),
    getCategory: build.query<ICate, string>({
      query: (_id) => `categories/${_id}`
    }),
  }),
});

export const { useGetCategoriesQuery,useGetCategoryQuery } = categoryApi;
