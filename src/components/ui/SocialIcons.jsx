import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Icons = [
  { target: "https://github.com/UlisesValero", icon: <AiFillGithub /> },
  { target: "https://www.linkedin.com/in/ulises-valero-24b744229/", icon: <FaLinkedinIn /> },
  { target: "mailto:u.ivalero@hotmail.com", icon: <AiOutlineMail/> }
]

const SocialIcons = () => {
  return (
    <div className='flex flex-wrap gap-6 w-full max-w-full overflow-hidden'>
      {Icons.map((icon, i) => (
        <a className="text-3xl dark:text-gray-300" key={i} rel="noopener noreferer" target="_blank" href={icon.target}>
          {icon.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
