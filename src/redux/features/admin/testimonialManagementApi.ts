import { baseApi } from "../../api/baseApi";

const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTestimonials: builder.query({
      query: () => ({
        url: `/testimonials`,
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),

    addTestimonial: builder.mutation({
      query: (newTestimonial) => ({
        url: "/testimonials",
        method: "POST",
        body: newTestimonial,
      }),
      invalidatesTags: ["testimonial"],
    }),

    getSingleTestimonial: builder.query({
      query: (id) => ({
        url: `/testimonials/${id}`,
        method: "GET",
      }),
    }),

    updateATestimonial: builder.mutation({
      query: ({ id, updatedTestimonial }) => ({
        url: `testimonials/${id}`,
        method: "PATCH",
        body: updatedTestimonial,
      }),
      invalidatesTags: ["testimonial"],
    }),

    deleteATestimonial: builder.mutation({
      query: (id) => ({
        url: `testimonials/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const {
  useGetAllTestimonialsQuery,
  useGetSingleTestimonialQuery,
  useAddTestimonialMutation,
  useUpdateATestimonialMutation,
  useDeleteATestimonialMutation,
} = testimonialsApi;
