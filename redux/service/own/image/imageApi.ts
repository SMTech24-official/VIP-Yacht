/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TApiResponse } from "@/types/global";

const imageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<TApiResponse<string>, FormData>({
      query: (file) => ({
        url: "/image", // Replace with your actual endpoint
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["image"],
    }),
    deleteImage: builder.mutation<TApiResponse<any>, string>({
      query: (filename) => ({
        url: `/image`, // Replace with your actual endpoint
        method: "DELETE",
        body: { filename },
      }),
      invalidatesTags: ["image"],
    }),
  }),
});

export const {
  useUploadImageMutation, // Import the uploadImage mutation
  useDeleteImageMutation, // Import the deleteImage mutation
} = imageApi;
