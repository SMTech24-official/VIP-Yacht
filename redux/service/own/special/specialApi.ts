/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TApiResponse, TQuery } from "@/types/global";
import { TSpecial } from "@/types/specialType";
import buildSearchQuery from "@/utils/buildSearchQuery";

const specialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteSpecial: builder.mutation<TApiResponse<TSpecial>, TSpecial>({
      query: (special) => ({
        url: "/special", // Replace with your actual endpoint
        method: "POST",
        body: special,
      }),
      invalidatesTags: ["special"],
    }),
    getAllSpecials: builder.query<TApiResponse<TSpecial[]>, TQuery[]>({
      query: (args: TQuery[]) => ({
        url: "/special", // Replace with your actual endpoint
        method: "GET",
        params: buildSearchQuery(args),
      }),
      providesTags: ["special"],
    }),
    getSingleSpecial: builder.query<TApiResponse<TSpecial>, string>({
      query: (uri: string) => ({
        url: `/special/${uri}`, // Replace with your actual endpoint
        method: "GET",
      }),
      providesTags: ["special"],
    }),
    updateSpecial: builder.mutation<
      TApiResponse<TSpecial>,
      { id: string; special: TSpecial }
    >({
      query: (data) => ({
        url: `/special/${data.id}`, // Replace with your actual endpoint
        method: "PUT",
        body: data.special,
      }),
      invalidatesTags: ["special"],
    }),
    deleteSpecial: builder.mutation<TApiResponse<any>, string>({
      query: (uri: string) => ({
        url: `/special/${uri}`, // Replace with your actual endpoint
        method: "DELETE",
      }),
      invalidatesTags: ["special"],
    }),
  }),
});

export const {
  useCreteSpecialMutation,
  useGetAllSpecialsQuery,
  useGetSingleSpecialQuery,
  useUpdateSpecialMutation,
  useDeleteSpecialMutation,
} = specialApi;
