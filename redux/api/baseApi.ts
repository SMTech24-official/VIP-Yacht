// src/app/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store"; // Import RootState

export const baseApi = createApi({
  reducerPath: "baseApi", // Unique key for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1", // Replace with your API base URL
    prepareHeaders: (headers, { getState }) => {
      // Get the token from the auth slice in the Redux store
      const state = getState() as RootState;
      const token = state.auth.token; // Access the token from the auth slice

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // Define endpoints in separate files if needed
  tagTypes: ["auth", "ankor", "special", "blog", "image", "destination"],
});
