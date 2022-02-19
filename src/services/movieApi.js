import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { uri } from "../assets/common/API_Keys";

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    // =============
    getMovies: builder.query({
      query: (fetchURI) => ({
        url: `${fetchURI}`,
        method: "GET",
      }),
    }),
    // =============
    bannerImage: builder.query ({
      query: () => ({
        url:`${uri.netflixOriginal}`,
        method: "GET"
      })
    })
    // =============
  }),
});

export const { useGetMoviesQuery, useBannerImageQuery } = movieApi;
