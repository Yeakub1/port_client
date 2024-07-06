"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoCall, IoMail, IoMenu } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const navData = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Blogs",
    route: "/blogs",
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-[#190128] text-white">
      <div className="max-w-7xl mx-auto">
          <div >
            <div className="flex gap-5 justify-between items-center xl:container mx-auto py-4 px-4 rounded-md">
              <Link
                href="/"
                className="text-gray-300 text-3xl font-semibold cursor-pointer"
              >
                Yeakub
              </Link>
              <div className="hidden lg:flex gap-10 font-semibold text-gray-300">
                {navData.map((item, index) => (
                  <Link
                    key={index}
                    className={`${
                      item.route === pathname ? "text-violet-500" : ""
                    } hover:text-violet-500 transition-all duration-300 ease-in-out`}
                    href={item.route}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <h1> contact</h1>
              <button
                onClick={openSidebar}
                className="lg:hidden text-violet-500 text-3xl"
              >
                <IoMenu />
              </button>
            </div>
          </div>

          {/* --- Sidebar ---  */}
          <div
            className={`fixed ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden top-0 left-0 w-[300px] transition-all duration-300 ease-in-out h-screen bg-gray-800 z-50`}
          >
            <div className="flex flex-col gap-5 h-full xl:container mx-auto py-8 px-4 rounded-md">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold">
                  Mehedi <span className="text-violet-500">Hasan</span>
                </h2>
                <button
                  onClick={closeSidebar}
                  className="text-violet-500 rotate-90 border border-violet-500 rounded-full text-sm p-1"
                >
                  <FaX />
                </button>
              </div>
              <div className="flex flex-col gap-3 font-semibold text-gray-300">
                {navData.map((item, index) => (
                  <Link
                    key={index}
                    onClick={closeSidebar}
                    className="py-3 bg-gray-700 text-center rounded-md hover:text-violet-500 transition-all duration-300 ease-in-out"
                    href={item.route}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <h1> contact</h1>
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default Navbar;
