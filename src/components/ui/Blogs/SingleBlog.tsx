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
    <div className="min-h-[50vh]">
      {!blogData && (
        <div className="pt-16">
          <LargeSpinner />
        </div>
      )}
      {blogData && (
        <div>
          <Title route={params?.id} title={blog.title} description="" />
          <div data-aos="fade-up" className="xl:container mx-auto px-4 py-20">
            <div className="flex gap-5 flex-col items-start lg:flex-row">
              <div className="border-2 border-violet-900 p-2 mb-5 lg:mb-10 h-[270px] md:h-[350px]">
                <Image
                  src={blog.coverPhoto}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="h-full"
                />
              </div>
              <div className="flex flex-col items-start mb-10">
                <h2 className="py-1 px-3 font-semibold text-gray-300 bg-violet-700 rounded-lg mb-3">
                  {blog.category}
                </h2>
                <p className="font-semibold text-gray-300 ml-1">
                  Published: {getDate(blog.createdAt)}
                </p>
              </div>
            </div>
            <div
              className="text-gray-200 mb-16"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <div className="flex justify-end">
              <button
                onClick={() => router.back()}
                className="bg-violet-800 hover:bg-violet-900 transition-colors duration-300 ease-in-out flex justify-center text-lg items-center rounded-full font-semibold text-gray-300 h-[50px] w-[50px]"
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
