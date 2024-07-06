"use client";

import { useGetSkillsQuery } from "@/redux/features/skills/skillsApi";
import { useEffect } from "react";
import { FaGears } from "react-icons/fa6";
import LargeSpinner from "../../Spinner/LargeSpinner";

const AboutSkills = () => {
  const { data: skillsData, error, refetch } = useGetSkillsQuery(undefined);

  useEffect(() => {
    if (error) {
      const retryTimeout = setTimeout(() => {
        refetch();
      }, 2000);

      return () => clearTimeout(retryTimeout);
    }
  }, [error, refetch]);

  return (
    <div className="mb-[50px]">
      {!skillsData && <LargeSpinner />}
      {skillsData && (
        <div
          data-aos="fade-up"
          className="border border-violet-950 p-5 lg:mx-20 shadow-inner shadow-violet-900/50 rounded-md"
        >
          <h2 className="flex items-center text-3xl font-semibold text-violet-600 mb-7">
            Key Technical Skills <FaGears className="ml-2 -mt-1" />
          </h2>
          <div className="mb-16">
            {skillsData?.data?.map((item: any) => {
              const progress =
                item?.proficiency === "Expert"
                  ? "w-full"
                  : item?.proficiency === "Advanced"
                  ? "w-3/4"
                  : item?.proficiency === "Intermediate"
                  ? "w-1/2"
                  : "w-1/4";

              return (
                <div data-aos="fade-up" key={item.id} className="mb-8">
                  <p className="mb-2 font-semibold text-gray-300">
                    {item.name}
                  </p>
                  <div className="h-5 p-1 w-full rounded-sm bg-gray-800 overflow-hidden">
                    <div
                      data-aos="fade-right"
                      className={`h-full ${progress} rounded-sm bg-gradient-to-br from-violet-600 to-gray-100 mb-5`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div data-aos="fade-up" className="mb-16">
            <h2 className="flex items-center text-3xl font-semibold text-violet-600 mb-7">
              Others <FaGears className="ml-2 -mt-1" />
            </h2>
            <ul className="list-disc pl-5 font-semibold text-gray-300">
              <li className="mb-2">C (Data Structures)</li>
              <li className="mb-2">C++ (OOP)</li>
              <li className="mb-2">Java (OOP)</li>
              <li className="mb-2">Pyhon (Basics)</li>
            </ul>
          </div>
          <div data-aos="fade-up">
            <h2 className="flex items-center text-3xl font-semibold text-violet-600 mb-7">
              Language Skills <FaGears className="ml-2 -mt-1" />
            </h2>
            <ul className="list-disc pl-5 font-semibold text-gray-300">
              <li className="mb-2">Bengali : Native language</li>
              <li className="mb-2">
                English : Proficient in speaking and writing
              </li>
              <li className="mb-2">Hindi: Fluent in listening</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSkills;
