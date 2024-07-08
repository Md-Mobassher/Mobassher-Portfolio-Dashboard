import { baseApi } from "../../api/baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: `/projects`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),

    addProject: builder.mutation({
      query: (newProject) => ({
        url: "/projects",
        method: "POST",
        body: newProject,
      }),
      invalidatesTags: ["project"],
    }),

    getSingleProject: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
    }),

    updateAProject: builder.mutation({
      query: ({ id, updatedProject }) => ({
        url: `projects/${id}`,
        method: "PATCH",
        body: updatedProject,
      }),
      invalidatesTags: ["project"],
    }),

    deleteAProject: builder.mutation({
      query: (id) => ({
        url: `projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useAddProjectMutation,
  useUpdateAProjectMutation,
  useDeleteAProjectMutation,
} = projectsApi;
