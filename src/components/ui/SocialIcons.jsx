// import { SocialIcon } from 'react-social-icons'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

// import { social } from '../../lib/social'

const Icons = [
  <AiFillGithub />,
<FaLinkedinIn />,
<AiOutlineMail/>
]

const SocialIcons = () => {
  return (
    <div className='flex flex-wrap gap-6 w-full max-w-full overflow-hidden'>
      {Icons.map((icon, i) => (
        <div className="text-3xl dark:text-gray-300" key={i}>
          {icon}
        </div>
      ))}
    </div>
  )
}

export default SocialIcons
