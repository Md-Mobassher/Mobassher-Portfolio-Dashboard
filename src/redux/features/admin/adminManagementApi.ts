import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStatistics: builder.query({
      query: () => ({
        url: `/admin/statistics`,
        method: "GET",
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: `/admin/users`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getSingleUser: builder.query({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "GET",
      }),
    }),

    updateAUser: builder.mutation({
      query: ({ id, updateUser }) => ({
        url: `/admin/users/${id}`,
        method: "PATCH",
        body: updateUser,
      }),
      invalidatesTags: ["user"],
    }),

    deleteAUser: builder.mutation({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllStatisticsQuery,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateAUserMutation,
  useDeleteAUserMutation,
} = adminApi;
