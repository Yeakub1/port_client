import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

type TProps = {
  title: string;
  description: string;
  route: string;
};

const Title = ({ title, description, route }: TProps) => {
  return (
    <div className="bg-[url('/headline.jpg')] bg-cover bg-left lg:bg-center">
      <div className="bg-gray-900/80 md:bg-gray-900/85">
        <div className="xl:container flex flex-col items-start justify-center mx-auto min-h-[250px] py-16 px-4">
          <h2 className="text-3xl uppercase font-semibold text-gray-200 mb-5 ">
            {title}
          </h2>
          <p className="max-w-[900px] font-medium text-gray-400 text-justify mb-7">
            {description}
          </p>
          <p className="flex items-center text-sm font-semibold text-gray-300">
            Home <IoMdArrowDropright />{" "}
            <span className="text-violet-500">{route}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
