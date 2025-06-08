import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiBootstrap } from "react-icons/di";
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from "react";

const Stack = () => {
  const [inView, setInView] = useState(false);
  const stackRef = useRef(null);

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

  const icons = [
    <FaReact className="text-blue-400" />,
    <IoLogoJavascript color="yellow" />,
    <FaHtml5 color="orange" />,
    <IoLogoCss3 className="text-blue-500" />,
    <SiTailwindcss className="text-blue-400" />,
    <RiFirebaseLine color="orange" />,
    <GrMysql color="gray" />,
    <DiBootstrap color="purple" />,
  ];

  const stackNames = [
    "ReactJS",
    "Javascript",
    "HTML5",
    "CSS3",
    "Tailwind v.4",
    "Firebase",
    "SQL",
    "Bootstrap"
  ];

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
        className="font-h1 dark:text-white text-[3.5rem] sm:text-8xl md:text-5xl lg:text-7xl text-center text-gradient-theme pointer-events-none "
      >
        Stack
      </motion.h1>

      <div
        ref={stackRef}
        className="relative z-10 text-5xl md:text-3xl flex flex-col flex-wrap gap-y-5 w-full md:w-[75%] lg:w-[60%] pt-25"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: -3, rotateX: 6 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex items-center lg:justify-center gap-4 dark:border-salmon border-lgray border dark:shadow-salmon shadow-lgray bg-lgray/80 dark:bg-ddgray/50 p-2 rounded-md shadow-sm w-full md:w-auto"
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
