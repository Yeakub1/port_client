import { useGetSingleBlogQuery } from "@/redux/features/blogs/blogsApi";
import Title from "../Title/Title";
import LargeSpinner from "../Spinner/LargeSpinner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

type TParams = {
  params: {
    id: string;
  };
};

const getDate = (date: Date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

const SingleBlog = ({ params }: TParams) => {
  const { data: blogData, error, refetch } = useGetSingleBlogQuery(params.id);
  const blog = blogData?.data;
  const router = useRouter();

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
      <div className="min-h-[50vh] max-w-7xl mx-auto">
        {!blogData && (
          <div className="pt-16">
            <LargeSpinner />
          </div>
        )}
        {blogData && (
          <div>
            <div data-aos="fade-up" className="xl:container mx-auto px-4 py-20">
              <div className="flex gap-5 flex-col items-start lg:flex-row">
                <div className=" p-2 mb-5 lg:mb-10 h-[270px] md:h-[350px]">
                  <Image
                    src={blog.coverPhoto}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="h-full"
                  />
                </div>
                <div className="flex flex-col items-start mb-10">
                  <h2 className="py-1 px-3 font-semibold bg-[#09867E] rounded-lg mb-3">
                    {blog.category}
                  </h2>
                  <p className="font-semibold ml-1">
                    Published: {getDate(blog.createdAt)}
                  </p>
                </div>
              </div>
              <div
                className=" mb-16"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
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
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
