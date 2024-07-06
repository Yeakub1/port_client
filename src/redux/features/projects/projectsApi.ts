import { baseApi } from "@/redux/api/baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
    }),
    getSingleProject: builder.query({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProjectsQuery, useGetSingleProjectQuery } = projectsApi;
