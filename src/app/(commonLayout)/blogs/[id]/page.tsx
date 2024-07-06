"use client";
import SingleBlog from "@/components/ui/Blogs/SingleBlog";

type TParams = {
  params: {
    id: string;
  };
};

const page = ({ params }: TParams) => {
  return (
    <>
      <SingleBlog params={params} />
    </>
  );
};

export default page;
