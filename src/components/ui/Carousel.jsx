import { useState } from "react";
import Cards from "./Cards";
import { translations } from "../../lib/translations"; 
import { useLanguage } from "../../context/LanguageContext";

const Carousel = () => {
  const { language } = useLanguage(); // "es" o "en"
  const data = translations[language].experienceSection;

  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-3xl  mx-auto overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {data.map((project, i) => (
          <div key={project.id} className="w-full flex-shrink-0 h-full ">
            <Cards
              image={
                <img
                  src={project.image}
                  alt={project.name}
                  className=""
                />
              }
              name={project.name}
              description={project.description}
              status={project.status}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 text-2xl transform -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white p-1 rounded-xl hover:bg-white/50 dark:hover:bg-black/70 cursor-pointer"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 text-2xl transform -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white p-1 rounded-xl hover:bg-white/50 dark:hover:bg-black/70 cursor-pointer"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {data.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-black dark:bg-white" : "bg-black/30 dark:bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
