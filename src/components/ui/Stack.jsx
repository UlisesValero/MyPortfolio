import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiBootstrap } from "react-icons/di";

const Stack = () => {
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
    <div className="text-5xl md:text-3xl flex flex-col flex-wrap gap-y-5 w-[70%]">
      {icons.map((icon, index) => (
        <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm w-full md:w-auto">
          {icon}
          <h1 className="text-black text-xl">{stackNames[index]}</h1>
        </div>
      ))}
    </div>
  );
};

export default Stack;
