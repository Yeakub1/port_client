"use client";

import { useGetSkillsQuery } from "@/redux/features/skills/skillsApi";
import LargeSpinner from "../../Spinner/LargeSpinner";
import { useEffect, useState } from "react";

const Skills = () => {
  const { data: skillData, error, refetch } = useGetSkillsQuery(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (error) {
      const retryTimeout = setTimeout(() => {
        refetch();
      }, 2000);

      return () => clearTimeout(retryTimeout);
    }
  }, [error, refetch]);

  return (
 <div className="bg-[#190128] text-white">
    <div className="max-w-7xl mx-auto">
      <div className="pt-10 pb-[100px] px-4">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold py-3 mb-10 text-gray-300">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillData?.data?.map((item: any) => {
            return (
              <div
                data-aos="fade-up"
                key={item.id}
                className="mb-8 p-4 bg-[#09867E] text-white rounded-lg flex items-center justify-center"
              >
                <p className="font-semibold">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
