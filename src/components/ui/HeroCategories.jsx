import { translations } from '../../lib/translations'
import { useLanguage } from '../../context/LanguageContext'

const HeroCategories = () => {
    const { language } = useLanguage()
    const categories = translations[language]?.heroCategories

    return (
        <div className='md:flex md:flex-row md:gap-5 text-white dark:text-gray-300 font-h1 md:text-2xl lg:text-3xl ' >
            {Object.entries(categories).map(([key, label]) => (
                <div className='z-40 cursor-pointer' key={key}>{label}</div>
            ))}
        </div>
    )
}

export default HeroCategories
