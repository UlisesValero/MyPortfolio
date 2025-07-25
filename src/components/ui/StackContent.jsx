import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa"
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io"
import { SiTailwindcss } from "react-icons/si"
import { RiFirebaseLine } from "react-icons/ri"
import { GrMysql } from "react-icons/gr"
import { DiBootstrap } from "react-icons/di"
import { TbBrandMongodb } from "react-icons/tb"


const StackContent = () => {
    const icons = [
        <FaNodeJs className="text-green-400" />,
        <TbBrandMongodb className="text-green-400"/>,
        <FaReact className="text-blue-400" />,
        <IoLogoJavascript color="yellow" />,
        <GrMysql color="gray" />,
        <FaHtml5 color="orange" />,
        <IoLogoCss3 className="text-blue-500" />,
        <SiTailwindcss className="text-blue-400" />,
        <RiFirebaseLine color="orange" />,
        <DiBootstrap color="purple" />,
    ]

    const stackNames = [
        "NodeJS",
        "MongoDB",
        "ReactJS",
        "Javascript",
        "SQL",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Firebase",
        "Bootstrap"
    ]
    return[icons, stackNames]
}

export default StackContent