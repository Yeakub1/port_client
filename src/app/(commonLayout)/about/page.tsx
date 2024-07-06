"use client";

import Education from "@/components/ui/About/Education/Education";
import Skills from "@/components/ui/Homepage/Skills/Skills";
import { useGetUserProfileQuery } from "@/redux/features/user/userApi";
import { useEffect } from "react";

const AboutPage = () => {
  const { data: userData, error, refetch } = useGetUserProfileQuery(undefined);
  const profile = userData?.data?.UserProfile;

  useEffect(() => {
    if (error) {
      const retryTimeout = setTimeout(() => {
        refetch();
      }, 2000);

      return () => clearTimeout(retryTimeout);
    }
  }, [error, refetch]);

  return (
    <div>
      <Skills />
      <Education />
    </div>
  );
};

export default AboutPage;
