import { baseApi } from "@/redux/api/baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
