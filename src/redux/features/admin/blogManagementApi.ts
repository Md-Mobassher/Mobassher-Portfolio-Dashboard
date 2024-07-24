import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllblogs: builder.query({
      query: () => ({
        url: `/blogs`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),

    addBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs/create",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["blog"],
    }),

    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),

    updateABlog: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `blogs/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["blog"],
    }),

    deleteABlog: builder.mutation({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllblogsQuery,
  useGetSingleBlogQuery,
  useAddBlogMutation,
  useUpdateABlogMutation,
  useDeleteABlogMutation,
} = blogApi;
