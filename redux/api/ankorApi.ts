// src/app/paymentApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ankorApi = createApi({
  reducerPath: "aknorApi", // Unique key for this API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ankor.io", // Replace with your payment API base URL
    prepareHeaders: (headers) => {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("ankor_token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // Define endpoints in separate files if needed
  tagTypes: ["website"], // Define the tag type for this API slice
});
