/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TBlog } from "@/types/blogType";
import { TApiResponse, TQuery } from "@/types/global";
import buildSearchQuery from "@/utils/buildSearchQuery";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation<TApiResponse<TBlog>, FormData>({
      query: (formData) => ({
        url: "/blog",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["blog"],
    }),
    getAllBlogs: build.query<TApiResponse<TBlog[]>, TQuery[]>({
      query: (args: TQuery[]) => ({
        url: "/blog",
        method: "GET",
        params: buildSearchQuery(args),
      }),
      providesTags: ["blog"],
    }),
    getSingleBlog: build.query<TApiResponse<TBlog>, string>({
      query: (uri: string) => ({
        url: `/blog/${uri}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    updateBlog: build.mutation<
      TApiResponse<TBlog>,
      { id: string; blog: FormData }
    >({
      query: (data) => ({
        url: `/blog/${data.id}`,
        method: "PUT",
        body: data.blog,
      }),
      invalidatesTags: ["blog"],
    }),
    deleteBlog: build.mutation<TApiResponse<any>, string>({
      query: (uri: string) => ({
        url: `/blog/${uri}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
  // Add more endpoints as needed...
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
