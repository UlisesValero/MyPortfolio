import { useState } from "react";
import CarouselContent from "./CarouselContent";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";
import DragAndSlide from "../../hooks/DragAndSlide";

const Carousel = () => {
  const { language } = useLanguage();
  const data = translations[language].experienceSection;

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const {
    sliderRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = DragAndSlide({ nextSlide, prevSlide });

  return (
<div className="relative w-fit max-w-3xl overflow-hidden rounded-xl shadow-lg">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out cursor-default"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((project, i) => (
          <div key={project.id} className="w-full flex-shrink-0 ">
<CarouselContent
  image={
    <img
      src={project.image}
      alt={project.name}
      className="pointer-events-none rounded-t-xl object-cover h-70 sm:h-90 md:w-200"
    />
  }
  name={project.name}
  description={project.description}
  status={project.status}
  total={data.length}
  current={current}
  index={i}
  setCurrent={setCurrent}
/>
          </div>
        ))}
      </div>

<button
  onClick={prevSlide}
  className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 rounded-full bg-gray-300/70 dark:bg-salmon/30 hover:bg-gray-400/90 dark:hover:bg-salmon/80 hover:scale-105 transition duration-300 shadow-md cursor-pointer"
>
  <div className="w-3 h-3 border-t-2 border-l-2 border-black rotate-[-45deg] " />
</button>

<button
  onClick={nextSlide}
  className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 rounded-full bg-gray-300/70 dark:bg-salmon/30 hover:bg-gray-400/90 dark:hover:bg-salmon/80 hover:scale-105 transition duration-300 shadow-md cursor-pointer"
>
  <div className="w-3 h-3 border-t-2 border-r-2 border-black rotate-[45deg]" />
</button>


      
    </div>
  );
};

export default Carousel;
