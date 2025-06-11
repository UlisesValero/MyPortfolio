import { translations } from '../../lib/translations'
import { useLanguage } from '../../context/LanguageContext'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { BsArrowUpRight } from "react-icons/bs"
import useCarousel from '../../hooks/useCarousel'

const FootballContent = () => {
    const { language } = useLanguage()
    const CarouselContent = translations[language].hobbies2
         const {
        handleTouchEnd,
        handleTouchMove,
        handleTouchStart,
        nextSlide,
        prevSlide,
        currentItem
    } = useCarousel(CarouselContent)

    return (
        <section
            className="px-15"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="flex flex-col-reverse justify-end lg:flex-row pt-30">

                <div className="flex justify-center lg:justify-start relative pt-5">
                    {currentItem.image.includes("mp4") ? (
                        <video
                            src={currentItem.image}
                            controls
                            className="h-100 lg:h-100 rounded-xl shadow-lg"
                        />
                    ) : (
                        <img
                            src={currentItem.image}
                            alt={currentItem.name}
                            className="lg:h-100 rounded-xl shadow-lg"
                        />
                    )}

                    <div className="absolute -bottom-15 right-60 lg:left-5 gap-2 hidden md:flex">
                        <button
                            onClick={prevSlide}
                            className="p-3 cursor-crosshair bg-green-400 dark:bg-salmon text-black hover:bg-green-300 dark:hover:bg-white"
                            aria-label="Previous"
                        >
                            <FiArrowLeft />
                        </button>
                        <div
                            onClick={nextSlide}
                            className="p-3 cursor-crosshair bg-green-400 dark:bg-salmon text-black hover:bg-green-300 dark:hover:bg-white"
                            aria-label="Next"
                        >
                            <FiArrowRight />
                        </div>
                    </div>
                </div>
                                <div className="w-full lg:w-1/2 px-5 lg:px-20 pt-10 flex flex-col justify-between gap-5">
                    <div className="space-y-5 border-b border-gray-400 pb-5">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                            {currentItem.number}
                        </h2>
                        <h3 className="text-sm sm:text-base md:text-lg text-green-400 dark:text-salmon uppercase tracking-widest font-h1">
                            {currentItem.briefDescription}
                        </h3>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-h3">
                            {currentItem.name}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-p">
                            {currentItem.footballDesc}
                        </p>
                    </div>

                    <a
                        href={currentItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-green-400 dark:bg-salmon w-fit p-2 rounded-full hover:bg-green-300 transition"
                    >
                        <BsArrowUpRight className="text-black text-xl" />
                    </a>

                </div>

            </div>
        </section>
    )
}

export default FootballContent

