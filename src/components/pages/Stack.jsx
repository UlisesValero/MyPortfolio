import StackContent from '../ui/StackContent';
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from "react";

const Stack = () => {
  const [inView, setInView] = useState(false);
  const stackRef = useRef(null);
  const [icons, stackNames] = StackContent()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.intersectionRatio >= 0.15),
      { threshold: [0.15] }
    );

    if (stackRef.current) observer.observe(stackRef.current);
    return () => {
      if (stackRef.current) observer.unobserve(stackRef.current);
    };
  }, []);



  return (
    <div className="relative w-full flex justify-center items-center">
      <motion.h1
        initial={false}
        animate={inView
          ? {
              position: "absolute",
              top: "60%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              scale: 3,
              zIndex: 0,
            }
          : {
              position: "relative",
              top: 0,
              left: 0,
              x: 0,
              y: 0,
              scale: 1,
              zIndex: 10,
            }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="font-h1 dark:text-white text-[3.5rem] sm:text-8xl md:text-5xl lg:text-7xl text-center text-gradient-theme pointer-events-none theme-animation"
      >
        Stack
      </motion.h1>

      <div
        ref={stackRef}
        className="relative z-10 text-5xl md:text-3xl flex flex-col flex-wrap gap-y-5 w-[90%] md:w-[75%] lg:w-[20%] pt-25"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: -6, rotateX: 6 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="theme-animation flex items-center lg:justify-center gap-4 dark:border-salmon border-lgray border dark:shadow-salmon shadow-lgray bg-lgray/80 dark:bg-ddgray/50 p-2 rounded-md shadow-sm w-full md:w-auto"
          >
            <motion.div className="brightness-120 hover:cursor-crosshair lg:text-5xl" whileHover={{ scale: 1.5, rotateX: -3 }}>
              {icon}
            </motion.div>
            <h1 className="text-gray-300 text-xl lg:text-3xl pointer-events-none">{stackNames[index]}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
