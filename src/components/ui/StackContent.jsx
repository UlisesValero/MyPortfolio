import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiBootstrap } from "react-icons/di";

const StackContent = () => {
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
    return[icons, stackNames]
}

export default StackContent