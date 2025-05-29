
import Button from "./Button";
import {FileDown} from 'lucide-react'




const Resume = () => {


  return (
    <section className="flex flex-col items-center gap-6 w-full py-5">
      <img
        src="/assets/CvImg.PNG"
        className="w-[350px] md:w-[450px] lg:w-[550px]  rounded-xl shadow-lg"
        title="CV Ulises Valero"
      />
      <a
        href="/assets/Cv.PNG"
        download="CV-Ulises-Valero.pdf"
        className="text-sm sm:text-lg"
      >
        <Button text={<FileDown />} />
      </a>
    </section>
  );
};

export default Resume;
