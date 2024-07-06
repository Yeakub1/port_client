"use client";
import React, { useEffect } from "react";
import LargeSpinner from "@/components/ui/Spinner/LargeSpinner";
import Title from "@/components/ui/Title/Title";
import { blogDescription } from "@/constants/pageTitles";
import { useGetBlogsQuery } from "@/redux/features/blogs/blogsApi";
import Image from "next/image";
import DOMPurify from "dompurify";
import Link from "next/link";

const truncateHTML = (htmlString: any, maxLength: number) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  const text = doc.body.textContent || "";
  const truncatedContent =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return DOMPurify.sanitize(truncatedContent);
};

const BlogsPage = () => {
  const { data: blogsData, error, refetch } = useGetBlogsQuery(undefined);

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
      <Title title="Blogs" description={blogDescription} route="Blogs" />
      <div className="xl:container mx-auto px-4 py-20">
        {!blogsData && <LargeSpinner />}
        <div className="mb-[100px]">
          {blogsData?.data?.map((blog: any) => {
            return (
              <div
                key={blog.id}
                data-aos="fade-up"
                className="flex flex-col lg:flex-row bg-gray-950/50 mb-10 p-4 md:p-5 rounded-md shadow-md shadow-gray-800"
              >
                <div className="rounded-md relative overflow-hidden h-[250px] md:h-[300px] lg:h-[280px] xl:h-[350px] lg:mr-5 mb-7 lg:mb-0 max-w-[600px]">
                  <Image
                    src={blog.coverPhoto}
                    alt={blog.title}
                    width={600}
                    height={300}
                    className="h-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-violet-950/30"></div>
                </div>
                <div className="max-w-[700px] flex flex-col items-start">
                  <h2 className="text-gray-300 text-2xl font-semibold mb-5">
                    {blog.title}
                  </h2>
                  <div
                    className="text-justify text-gray-300 mb-7"
                    dangerouslySetInnerHTML={{
                      __html: truncateHTML(blog.content, 600),
                    }}
                  />
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="bg-violet-800 hover:bg-violet-900 transition-colors duration-300 ease-in-out py-2 px-5 mt-auto rounded-sm font-semibold text-gray-300"
                  >
                    Read More
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

export default BlogsPage;
