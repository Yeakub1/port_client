import { baseApi } from "@/redux/api/baseApi";

const messagesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMessage: builder.mutation({
      query: (data) => ({
        url: "/messages",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateMessageMutation } = messagesApi;
