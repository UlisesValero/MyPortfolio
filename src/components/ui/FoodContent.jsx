import { useState, useRef } from 'react'
import { translations } from '../../lib/translations'
import { useLanguage } from '../../context/LanguageContext'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { BsArrowUpRight } from "react-icons/bs"

const FoodContent = () => {
  const { language } = useLanguage()
  const CarouselContent = translations[language].hobbies
  const [currentIndex, setCurrentIndex] = useState(0)

  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CarouselContent.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === CarouselContent.length - 1 ? 0 : prev + 1
    )
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  const current = CarouselContent[currentIndex]

  return (
    <section
      className="px-15"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="lg:w-[70%] h-fit flex flex-col items-center lg:items-start justify-center lg:flex-row gap-x-5 pb-5">

        <div className="w-full lg:w-1/2 px-5 pt-10 flex flex-col justify-between gap-5">
          <div className="space-y-5 border-b border-gray-400 pb-5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              {current.number}
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg text-green-400 dark:text-salmon uppercase tracking-widest font-h1">
              {current.briefDescription}
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-h3">
              {current.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-p">
              {current.foodDesc}
            </p>
          </div>

          <a
            href={current.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-400 dark:bg-salmon w-fit p-2 rounded-full hover:bg-green-300 transition"
          >
            <BsArrowUpRight className="text-black text-xl" />
          </a>

        </div>

        <div className="lg:w-1/2 relative pt-5">
          <img
            src={current.image}
            alt={current.name}
            className="w-60 lg:w-fit h-80 lg:h-100 rounded-xl shadow-lg"
          />

          <div className="absolute -bottom-15 left-45 gap-2 hidden md:flex">
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

      </div>
    </section>
  )
}

export default FoodContent

