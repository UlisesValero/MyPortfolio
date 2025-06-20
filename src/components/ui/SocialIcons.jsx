import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { cn } from "../../lib/utils"

const Icons = [
  { target: "https://github.com/UlisesValero", icon: <AiFillGithub /> },
  { target: "https://www.linkedin.com/in/ulises-valero-24b744229/", icon: <FaLinkedinIn /> },
  { target: "mailto:u.ivalero@hotmail.com", icon: <AiOutlineMail/> }
]

const SocialIcons = ( {className} ) => {
  return (
    <div className='flex flex-wrap gap-6 w-full max-w-full overflow-hidden'>
      {Icons.map((icon, i) => (
        <a className={cn("text-4xl text-green-300 dark:text-white hover:scale-110 hover:text-green-400 dark:hover:text-salmon hover:brightness-125", className)} key={i} rel="noopener noreferer" target="_blank" href={icon.target}>
          {icon.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
