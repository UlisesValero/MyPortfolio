
import Button from "./Button";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";

const Resume = () => {
  const {language} = useLanguage()

  return (
    <section className="flex flex-col items-center gap-3  w-full">
      <img
        src="/assets/CvImg.PNG"
        className="w-[350px] md:w-[430px] lg:w-[550px]  rounded-xl shadow-lg"
        title="CV Ulises Valero"
      />
      <a
        href={translations[language].resume.link}
        download="CV-Ulises-Valero.pdf"
        className="text-sm sm:text-lg"
      >
        <Button text={translations[language].resume.cv} />
      </a>
    </section>
  );
};

export default Resume;
