/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import {
  OptionalTDestinationType,
  TDestinationType,
} from "@/types/destinationType";
import { TApiResponse, TQuery } from "@/types/global";
import buildSearchQuery from "@/utils/buildSearchQuery";

const destinationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDestination: build.mutation<
      TApiResponse<OptionalTDestinationType>,
      TDestinationType
    >({
      query: (destination) => ({
        url: "/destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["destination"],
    }),
    updatedDestination: build.mutation<
      TApiResponse<OptionalTDestinationType>,
      { data: TDestinationType; id: string }
    >({
      query: (destination) => ({
        url: `/destination/${destination.id}`,
        method: "PUT",
        body: destination.data,
      }),
      invalidatesTags: ["destination"],
    }),
    getAllDestinations: build.query<
      TApiResponse<OptionalTDestinationType[]>,
      TQuery[]
    >({
      query: (args: TQuery[]) => ({
        url: "/destination",
        method: "GET",
        params: buildSearchQuery(args),
      }),
      providesTags: ["destination"],
    }),
    getSingleDestination: build.query<
      TApiResponse<OptionalTDestinationType>,
      string
    >({
      query: (uri: string) => ({
        url: `/destination/${uri}`,
        method: "GET",
      }),
      providesTags: ["destination"],
    }),
    deleteDestination: build.mutation<TApiResponse<any>, string>({
      query: (uri: string) => ({
        url: `/destination/${uri}`,
        method: "DELETE",
      }),
      invalidatesTags: ["destination"],
    }),
  }),
});

export const {
  useCreateDestinationMutation,
  useUpdatedDestinationMutation,
  useGetAllDestinationsQuery,
  useGetSingleDestinationQuery,
  useDeleteDestinationMutation,
} = destinationApi;
