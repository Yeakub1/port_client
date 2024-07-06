"use client";
import AboutSkills from "@/components/ui/About/AboutSkills/AboutSkills";
import Education from "@/components/ui/About/Education/Education";
import UserIntro from "@/components/ui/About/UserIntro/UserIntro";
import LargeSpinner from "@/components/ui/Spinner/LargeSpinner";
import Title from "@/components/ui/Title/Title";
import { aboutDescription } from "@/constants/pageTitles";
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
      <Title title="About" description={aboutDescription} route="About" />
      <div className="xl:container mx-auto px-4 py-20">
        {!userData && <LargeSpinner />}
        <div className="mb-[100px]">
          {userData && <UserIntro profile={profile} />}
        </div>
        {!userData && <LargeSpinner />}
        <div className="mb-[100px]">{userData && <Education />}</div>
        <AboutSkills />
      </div>
    </div>
  );
};

export default AboutPage;
