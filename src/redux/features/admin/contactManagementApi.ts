import { baseApi } from "../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => ({
        url: `/contact`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),

    addContact: builder.mutation({
      query: (newcontact) => ({
        url: "/contact",
        method: "POST",
        body: newcontact,
      }),
      invalidatesTags: ["contact"],
    }),

    getSingleContact: builder.query({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "GET",
      }),
    }),

    deleteAContact: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetSingleContactQuery,
  useAddContactMutation,
  useDeleteAContactMutation,
} = contactApi;
