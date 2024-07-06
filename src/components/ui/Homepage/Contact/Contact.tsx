"use client";
import { useCreateMessageMutation } from "@/redux/features/messages/messagesApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { toast } from "sonner";
import SmallSpinner from "../../Spinner/SmallSpinner";

type TFormInput = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [createMessage, { isLoading }] = useCreateMessageMutation();
  const { register, handleSubmit, reset } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    try {
      const result = await createMessage(data).unwrap();
      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <div className="bg-[#190128] text-white">
      <div className="pt-20 pb-[100px] lg:pb-[150px] max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold py-3 mb-20">
            Contact
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-2 justify-between items-center gap-10 lg:gap-5"
        >
          <div>
            <h2 className="text-gray-200 mb-5 text-3xl md:text-4xl flex items-center font-bold">
              Let's Work Together
            </h2>
            <h1 className="text-xl my-3"> Get In Touch With Me</h1>
            <div>
              <p className="flex items-center gap-2 mb-7">
                <IoLocation className="text-xl -mt-1 text-[#09867E]" /> Kushtia,
                Bangladesh
              </p>
              <p className="flex items-center gap-2 mb-7">
                <IoMail className="text-lg text-[#09867E]" />{" "}
                mryeakub10@gmail.com
              </p>
              <p className="flex items-center gap-2 mb-7">
                <IoCall className="text-base -mt-1 text-[#09867E]" /> +880
                16708664232
              </p>
            </div>
          </div>
          <div className="h-[300px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-inner shadow-gray-800 border border-gray-700 rounded-3xl h-full p-4 flex flex-col gap-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="bg-gray-800 border text-sm border-gray-700 outline-none rounded-3xl p-3"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <input
                  className="bg-gray-800 border text-sm border-gray-700 outline-none rounded-3xl p-3"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <textarea
                className="w-full flex-1 bg-gray-800 border text-sm border-gray-700 outline-none rounded-3xl p-3"
                placeholder="Message"
                {...register("message", { required: true })}
              />
              <button
                className="flex items-center justify-center gap-1 py-3 w-full bg-[#09867E] font-semibold rounded-3xl"
                type="submit"
              >
                {isLoading && <SmallSpinner />}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
