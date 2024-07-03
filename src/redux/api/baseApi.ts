import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mobassher-portfolio-server.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
  }),

  endpoints: () => ({}),
});
