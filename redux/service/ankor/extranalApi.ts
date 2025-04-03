import { baseApi } from "@/redux/api/baseApi";
import { TQuery } from "@/types/global";
import buildSearchQuery from "@/utils/buildSearchQuery";

const extranalApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllYatch: build.query({
      query: (arg: TQuery[]) => {
        return {
          url: "/ankor", // Replace with your actual endpoint
          method: "GET",
          params: buildSearchQuery(arg),
        };
      },
      providesTags: ["ankor"],
    }),
    getYachtById: build.query({
      query: (uri: string) => ({
        url: `/ankor/${uri}`, // Replace with your actual endpoint
        method: "GET",
      }),
      providesTags: ["ankor"],
    }),
  }),
});

export const { useGetAllYatchQuery, useGetYachtByIdQuery } = extranalApi;
