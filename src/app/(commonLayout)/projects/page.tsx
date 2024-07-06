"use client";

import LargeSpinner from "@/components/ui/Spinner/LargeSpinner";
import Title from "@/components/ui/Title/Title";
import { projectDescription } from "@/constants/pageTitles";
import { useGetProjectsQuery } from "@/redux/features/projects/projectsApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ProjectsPage = () => {
  const { data: projectsData, error, refetch } = useGetProjectsQuery(undefined);

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
      <Title
        title="Projects"
        description={projectDescription}
        route="Projects"
      />

      <div className="xl:container mx-auto px-4 pt-20 pb-[100px]">
        {!projectsData && <LargeSpinner />}
        <div className="grid md:grid-cols-2 gap-10 lg:px-16 mb-20">
          {projectsData?.data?.map((item: any) => {
            return (
              <div data-aos="fade-up" key={item.id} className="bg-gray-950">
                <div className="h-fit relative overflow-hidden group">
                  <div className="h-[270px] md:h-[380px] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 h-full w-full bg-violet-800/50 z-10  group-hover:bg-gray-800/50 transition-all duration-300 ease-in-out"></div>
                    <Image
                      src={item.imageLinks[0]}
                      alt={item.name}
                      width={800}
                      height={400}
                      className="h-full transition-all duration-500 ease-in-out group-hover:rotate-1 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 px-4">
                  <h2 className="text-xl text-gray-300 font-semibold">
                    {item.name}
                  </h2>
                  <Link
                    href={`/projects/${item.id}`}
                    className="text-center bg-violet-800 hover:bg-violet-900 transition-all duration-500 ease-in-out font-semibold rounded-sm py-2 w-[150px]"
                  >
                    Show Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
