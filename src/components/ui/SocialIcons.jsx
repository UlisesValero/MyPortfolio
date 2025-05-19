import { SocialIcon } from 'react-social-icons'
import { social } from '../../lib/social'

const SocialIcons = () => {
  return (
    <div className='hidden sm:hidden md:flex flex-wrap gap-4 w-full max-w-full overflow-hidden'>
      {social.map(icon => (
        <div
          key={icon.network}
          className='flex items-center gap-x-1 px-2 py-2 
          dark:bg-ddgray/75 bg-dgray/40 rounded-2xl border 
          dark:border-white/20 border-black/20 shrink-0'
        >
          <SocialIcon network={icon.network} />
          <h1 className='font-p dark:text-white whitespace-nowrap'>{icon.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default SocialIcons
