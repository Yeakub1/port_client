import Banner from "@/components/ui/Homepage/Banner/Banner";
import Contact from "@/components/ui/Homepage/Contact/Contact";
import Projects from "@/components/ui/Homepage/Projects/Projects";
import Skills from "@/components/ui/Homepage/Skills/Skills";

const CommonLayoutPage = () => {
  return (
    <>
      <Banner />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default CommonLayoutPage;
