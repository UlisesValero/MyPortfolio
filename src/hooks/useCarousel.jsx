import { useState, useRef } from 'react'

const useCarousel = (items = []) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const touchStartX = useRef(null)
    const touchEndX = useRef(null)

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? items.length - 1 : prev - 1
        )
    }

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === items.length - 1 ? 0 : prev + 1
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

    const currentItem = items[currentIndex]

    return {
        currentIndex,
        currentItem,
        handleTouchEnd,
        handleTouchMove,
        handleTouchStart,
        prevSlide,
        nextSlide
    }
}

export default useCarousel
