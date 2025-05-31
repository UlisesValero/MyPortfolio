import Carousel from "../ui/Carousel";
import Stack from '../ui/Stack'

const About = () => {
  return (
    <section className="flex flex-col md:flex-row w-full sm:px-3 gap-y-28">
      <div className="md:w-1/2 flex flex-col items-center justify-center gap-y-5">
      <h1 className="font-h1 dark:text-white text-5xl text-center text-gradient-theme ">
        Projects
      </h1>
        <Carousel />
      </div>
      
      <div className="md:w-1/2 flex items-center justify-center ">
      <div className=" flex flex-col items-center gap-y-10 w-[80%]">
        <h1 className="font-h1 dark:text-white text-5xl text-center text-gradient-theme ">
          Stack
        </h1>
        <Stack />
      </div>
      </div>
    </section>
  );
};

export default About
