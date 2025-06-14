import { useState, useRef } from "react"

const DragAndSlide = ({ nextSlide, prevSlide }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const sliderRef = useRef(null)

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX
    setDragOffset(diff)
  };

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    handleSwipe()
  };

  const handleSwipe = () => {
    if (Math.abs(dragOffset) > 50) {
      dragOffset < 0 ? nextSlide() : prevSlide()
    }
    setDragOffset(0)
  };

  return {
    sliderRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default DragAndSlide
