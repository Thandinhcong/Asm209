import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../interfaces/products";
export const pause = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),

  tagTypes: ["Product"],
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      query: () => `products`,
      providesTags: ["Product"],
    }),
    getProduct: build.query<IProduct[], string>({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),
    updateProduct: build.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    addProduct: build.mutation<IProduct, Partial<IProduct>>({
      query(body) {
        return {
          url: `products`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation<{ _id: string }, string>({
      query(_id) {
        return {
          url: `products/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} = productApi;
