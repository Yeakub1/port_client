"use client";

import LargeSpinner from "@/components/ui/Spinner/LargeSpinner";
import Title from "@/components/ui/Title/Title";
import { useGetSingleProjectQuery } from "@/redux/features/projects/projectsApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaGit, FaRocket } from "react-icons/fa";

type TParams = {
  params: {
    id: string;
  };
};

const SingleProjectPage = ({ params }: TParams) => {
  const [value, setValue] = useState(0);
  const {
    data: projectData,
    error,
    refetch,
  } = useGetSingleProjectQuery(params.id);
  const project = projectData?.data;
  const router = useRouter();

  const totalImages = projectData?.data?.imageLinks?.length;

  const handleLeft = () => {
    setValue(value - 1);
  };

  const handleRight = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  useEffect(() => {
    if (value < 0) {
      setValue(totalImages - 1);
    } else if (value === totalImages) {
      setValue(0);
    }
  }, [value, totalImages]);

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
      <div className="pb-[100px]">
        {!projectData && (
          <div className="pt-20 min-h-[60vh]">
            <LargeSpinner />
          </div>
        )}
        {projectData && (
          <div>
            <div
              data-aos="fade-up"
              className="grid lg:grid-cols-2 gap-10 xl:container px-4 mx-auto pt-16"
            >
              <div>
                <div className="h-[300px] md:h-[400px] relative overflow-hidden rounded-lg">
                  {project.imageLinks.map((item: any, index: number) => {
                    let position = "translate-x-[100%] opacity-0";

                    if (index === value) {
                      position = "translate-x-0 opacity-100";
                    }
                    if (
                      index === value - 1 ||
                      (value === 0 && index === project.imageLinks.length - 1)
                    ) {
                      position = "translate-x-[-100%] opacity-0";
                    }

                    return (
                      <div
                        key={index}
                        className={`flex flex-col items-center absolute ${position} p-2 top-0 left-0 h-full w-full transition-all duration-500 ease-in-out border-4 border-violet-700`}
                      >
                        <Image
                          src={item}
                          alt="image"
                          width={550}
                          height={400}
                          className="rounded-lg w-full h-full"
                        />
                      </div>
                    );
                  })}
                  <button
                    onClick={handleLeft}
                    className="absolute top-1/2 left-10 -translate-y-1/2 text-xl bg-slate-400/50 text-white p-3 rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={handleRight}
                    className="absolute top-1/2 right-10 -translate-y-1/2 text-xl bg-slate-400/50 text-white p-3 rounded-full hover:bg-violet-950 transition-all duration-300 ease-in-out"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <a
                    className="flex items-center justify-center gap-1 bg-[#09867E] w-[150px] mb-10 py-2 font-semibold text-center rounded-lg"
                    href={project.liveLink}
                    target="_blank"
                  >
                    <FaRocket />
                    Live Link
                  </a>
                  <div className="flex mb-10">
                    <a
                      className="flex items-center justify-center gap-1 bg-[#09867E] w-[150px] mb-10 py-2 font-semibold text-center rounded-lg"
                      href={project.frontendRepo}
                      target="_blank"
                    >
                      <BsGithub className="-mt-0.5" />
                      Client
                    </a>
                    <a
                      className="flex items-center justify-center gap-1 bg-[#09867E] w-[150px] mb-10 py-2 font-semibold text-center rounded-lg"
                      href={project.backendRepo}
                      target="_blank"
                    >
                      <BsGithub className="-mt-0.5" />
                      Server
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start mb-10">
                  <p className="bg-[#09867E] font-semibold text-gray-200 py-1 px-2 rounded-lg mb-3">
                    Feautures
                  </p>
                  <ul className="text-gray-400 list-disc font-semibold ml-5">
                    {project.features.map((item: string, index: number) => {
                      return (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-col items-start mb-10">
                  <p className="bg-[#09867E] font-semibold text-gray-200 py-1 px-2 rounded-lg mb-3">
                    Frontend Technologies
                  </p>
                  <ul className="text-gray-400 list-disc font-semibold ml-5">
                    {project.frontendTechnologies.map(
                      (item: string, index: number) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div className="flex flex-col items-start">
                  <p className="bg-[#09867E] font-semibold text-gray-200 py-1 px-2 rounded-lg mb-3">
                    Backend Technologies
                  </p>
                  <ul className="text-gray-400 list-disc font-semibold ml-5">
                    {project.backendTechnologies.map(
                      (item: string, index: number) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => router.back()}
                    className="bg-[#09867E] flex justify-center text-lg items-center rounded-full font-semibold text-gray-300 h-[50px] w-[50px]"
                  >
                    <FaArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProjectPage;
