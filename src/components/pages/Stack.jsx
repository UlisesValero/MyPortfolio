import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import StackContent from "../ui/StackContent"

const Stack = () => {
  const [inView, setInView] = useState(false)
  const stackRef = useRef(null)
  const [icons, stackNames] = StackContent()
  const containerRef = useRef(null)


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.15),
      { threshold: 0.15 }
    );

    if (stackRef.current) observer.observe(stackRef.current);
    return () => {
      if (stackRef.current) observer.unobserve(stackRef.current);
    };
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [])

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
      <motion.h1
        initial={{ scale: 1, opacity: 1, y: 0 }}
        animate={
          inView
            ? { scale: 3, opacity: 1, y: -60, transition: { duration: 0.7, ease: "easeInOut" } }
            : { scale: 1, opacity: 0.1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
        }
        className="absolute pointer-events-none select-none font-bold text-gradient-theme font-h1 text-[3rem] md:text-5xl"
      >
        Stack
      </motion.h1>

      <div
        ref={stackRef}
        className="relative z-10 pt-20 flex flex-wrap justify-center gap-4 max-w-3xl w-full "
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              rotateX: 10,
              rotateY: -8,
              boxShadow: "0 7px 15px rgb(170, 170, 170)",
              transition: { type: "spring", stiffness: 150 },
            }}
            className="w-28 h-35 flex flex-col items-center justify-evenly bg-lgray/60 dark:bg-gray-900/70 rounded-lg p-4 shadow-md dark:shadow-lg cursor-pointer select-none dark:border-salmon border-lgray border "
          >
            <motion.div className="text-5xl dark:text-salmon text-salmon brightness-110">
              {icon}
            </motion.div>
            <h2 className="text-white dark:text-gray-300 font-semibold text-md text-center">
              {stackNames[index]}
            </h2>
          </motion.div>
        ))}
      </div>
          <div ref={containerRef} className="w-full overflow-x-auto pt-15">
      <div className="flex flex-col gap-10 items-center w-full mx-auto rounded-lg shadow-lg">
        <img
          src="https://ghchart.rshah.org/UlisesValero"
          alt="GitHub Contribution Chart"
          className="min-w-3xl md:w-300 p-4  dark:bg-transparent rounded-md shadow-lg pointer-events-none select-none"
        />
      </div>
    </div>
    </section>
  )
}

export default Stack

