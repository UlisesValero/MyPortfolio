import { SocialIcon } from 'react-social-icons'


const SocialMedia = () => {
    return (
        <section className='h-full flex justify-center items-end'>
            <div className='flex gap-1 md:gap-5 w-fit '>
            <SocialIcon network="github" className='cursor-crosshair hover:scale-110'/>
            <SocialIcon network="linkedin" className='cursor-crosshair hover:scale-110'/>
            <SocialIcon network="instagram" className='cursor-crosshair hover:scale-110'/>
            <SocialIcon network="discord" className='cursor-crosshair hover:scale-110'/>
            <SocialIcon network="email" className='cursor-crosshair hover:scale-110'/>
            </div>
        </section>
    )
}

export default SocialMedia