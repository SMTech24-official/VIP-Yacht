/* eslint-disable @typescript-eslint/no-explicit-any */
// src/redux/api/authApi.ts
import { baseApi } from "@/redux/api/baseApi";
import { ILoginRequest, ILoginResponse, TApiResponse } from "@/types/global";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TApiResponse<ILoginResponse>, ILoginRequest>({
      query: (credentials) => ({
        url: "/auth/login", // Replace with your actual login endpoint
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["auth"],
    }),
    forgatPassword: builder.mutation<TApiResponse<any>, { email: string }>({
      query: (email) => ({
        url: "/auth/forgot-password", // Replace with your actual forgot password endpoint
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["auth"],
    }),
    resetPassword: builder.mutation<
      TApiResponse<any>,
      { id: string; password: string }
    >({
      query: (data) => ({
        url: `/auth/reset-password`, // Replace with your actual reset password endpoint
        method: "PUT",
        body: { password: data.password, id: data.id },
      }),
      invalidatesTags: ["auth"],
    }),
    getAnkorAccessToken: builder.query<TApiResponse<string>, void>({
      query: () => ({
        url: "/ankor/accessToken", // Replace with your actual Ankor access token endpoint
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useForgatPasswordMutation,
  useResetPasswordMutation,
  useGetAnkorAccessTokenQuery,
} = authApi;
