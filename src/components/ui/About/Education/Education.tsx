import { FaPen } from "react-icons/fa";

const Education = () => {
  return (
    <div
      data-aos="fade-up"
      className="border border-violet-950 p-5 lg:mx-20 shadow-inner shadow-violet-900/50 rounded-md"
    >
      <h2 className="flex items-center text-3xl text-violet-600 font-semibold mb-5">
        Education <FaPen className="text-xl ml-2" />
      </h2>
      <p className="text-xl font-semibold text-violet-300 mb-2">
        Kalinga Institute of Industrial Technology, India
      </p>
      <p className="font-semibold text-lg text-gray-400">
        Computer Science and Engineering
      </p>
      <p className="text-gray-400 font-medium italic">
        (Bachelor of Technology)
      </p>
      <p className="text-gray-400 font-medium mb-3">CGPA: 8.24</p>
      <p className="font-semibold text-gray-400">Final Year (Running)</p>
    </div>
  );
};

export default Education;
