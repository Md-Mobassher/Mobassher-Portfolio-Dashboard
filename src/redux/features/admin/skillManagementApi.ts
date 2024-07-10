import { baseApi } from "../../api/baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkills: builder.query({
      query: () => ({
        url: `/skills`,
        method: "GET",
      }),
      providesTags: ["skill"],
    }),

    addSkill: builder.mutation({
      query: (newSkill) => ({
        url: "/skills/create",
        method: "POST",
        body: newSkill,
      }),
      invalidatesTags: ["skill"],
    }),

    getSingleSkill: builder.query({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "GET",
      }),
    }),

    updateASkill: builder.mutation({
      query: ({ id, updatedSkill }) => ({
        url: `skills/${id}`,
        method: "PATCH",
        body: updatedSkill,
      }),
      invalidatesTags: ["skill"],
    }),

    deleteASkill: builder.mutation({
      query: (id) => ({
        url: `skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const {
  useGetAllSkillsQuery,
  useGetSingleSkillQuery,
  useAddSkillMutation,
  useUpdateASkillMutation,
  useDeleteASkillMutation,
} = skillsApi;
