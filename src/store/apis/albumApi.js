import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Dev Only!!!
const pause = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
    fetchFn: async (...args) => {
      // REMOVE FOR PRODUCTION
      await pause(500);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [
            {
              type: "Album",
              id: user.id,
            },
          ];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: "yumna",
            },
          };
        },
      }),

      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          return [
            {
              type: "Album",
              id: user.id,
            },
          ];
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
