import { SquareX } from 'lucide-react'
import { usePanel } from '../../context/PanelContext'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../lib/translations'
import Button from './Button'

const DeployedPanel = () => {
    const { isAnimating, togglePanelTimed } = usePanel()
    const { language } = useLanguage()

    return (
        <section
            className="w-70 h-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                    bg-lgray dark:bg-ddgray dark:text-white font-h1 text-xl rounded-r-3xl">
            <div className='flex flex-col items-center justify-center gap-5 h-full'>
                <button onClick={togglePanelTimed}
                    className={`transition-transform duration-300 ease-in-out
    ${isAnimating ? 'rotate-90 scale-75 opacity-50' : 'rotate-0 scale-100 opacity-100'}
                    absolute top-1 right-1 hover:bg-red-500 p-2 rounded-full`}>
                    <SquareX size={30} />
                </button>
                <div>
                    {translations[language].projectTitle.projectTitle}
                </div>
                <div>
                    {translations[language].deployedPanel.workWithMe}
                </div>
                <div>
                    Blog
                </div>
                <div className='absolute bottom-4'>
                    <Button text={translations[language].deployedPanel.stayConnected} />
                </div>
            </div>
        </section>
    )
}

export default DeployedPanel