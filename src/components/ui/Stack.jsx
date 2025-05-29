import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiBootstrap } from "react-icons/di";

const Stack = () => {
  const [shouldRotate, setShouldRotate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldRotate((prev) => !prev);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const rotationProps = shouldRotate
    ? {
        animate: { rotate: 360 },
        transition: {
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        },
      }
    : {
        animate: { rotate: 0 },
        transition: { duration: 0.3 },
      };

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
    return (
    <div className="flex gap-6 text-5xl">
      {icons.map((Icon, index) => (
        <motion.div key={index} {...rotationProps}>
          {Icon}
        </motion.div>
      ))}
    </div>
    )
}

export default Stack