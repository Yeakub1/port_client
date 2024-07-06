"use client";
import { Typewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  return (
    <h2 className="text-5xl font-bold mb-7 bg-clip-text text-transparent bg-gradient-to-br from-violet-500 to-orange-800 h-[150px] md:h-[100px]">
      <Typewriter
        words={["A Full-stack Web Developer"]}
        loop={5}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>
  );
};

export default TypewriterText;
