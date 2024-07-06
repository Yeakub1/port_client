"use client";

import Resume from "@/assets/Yeakub Resume.pdf";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import photo from "@/assets/Yeakub_Photo.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#190128] text-white">
      <div className="max-w-7xl px-5 mx-auto grid md:grid-cols-2 justify-between gap-10 items-center max-h-screen pt-10">
        <div className="">
          <div className="banner-text">
            <h1 className="md:text-5xl text-3xl font-bold mb-7 ">
              Hello, It’s Me Yeakub
            </h1>
          </div>
          <h1 className="text-3xl">I’m a Full Stack Developer</h1>
          <p className="mt-9 text-xl ">
            I am a Full Stack Developer is proficient in working with both
            front-end and back-end coding languages.
          </p>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1uFLzibYmRN2cqth9S8V4LI3HC1AfRGXU/view?usp=sharing"
            passHref
            legacyBehavior
          >
            <a className="inline-flex items-center gap-2 mt-6 text-white py-3 px-6 rounded-lg bg-[#09867E] transition duration-300 transform hover:scale-105">
              <FaDownload />
              Download Resume
            </a>
          </Link>
        </div>
        <div className="">
          <Image src={photo} alt="yeakub" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
