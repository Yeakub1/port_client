import { FaPen } from "react-icons/fa";

const Education = () => {
  return (
    <div className="bg-[#190128] text-white flex justify-center">
      <div data-aos="fade-up" className="p-5 lg:mx-20 shadow-inner rounded-md">
        <h2 className="flex items-center text-3xl font-semibold mb-5">
          Diploma
        </h2>
        <p className="text-xl font-semibold text-violet-300 mb-2">
          Ideal Polytecnich Instutite, Kushtia
        </p>
        <p className="font-semibold text-lg text-gray-400">
          Diploma In Engineering Computer Technology
        </p>
        <p className="text-gray-400 font-medium italic">Computer Technology</p>
        <p className="text-gray-400 font-medium mb-3">CGPA: 3.81</p>
        <p className="font-semibold text-gray-400">2018-2023</p>
      </div>
      <div data-aos="fade-up" className="p-5 lg:mx-20 shadow-inner rounded-md">
        <h2 className="flex items-center text-3xl font-semibold mb-5">
          Secondary School Certificate 
        </h2>
        <p className="text-xl font-semibold text-violet-300 mb-2">
          Chandiput secondary School
        </p>
       
        <p className="text-gray-400 font-medium italic">Science</p>
        <p className="text-gray-400 font-medium mb-3">GPA: 3.76</p>
        <p className="font-semibold text-gray-400">2013-2018</p>
      </div>
    </div>
  );
};

export default Education;
