import { translations } from '../../lib/translations'
import { useLanguage } from '../../context/LanguageContext'
import { scroll } from '../../lib/utils'

const HeroCategories = () => {
    const { language } = useLanguage()
    const categories = translations[language]?.heroCategories

    return (
        <div className='md:flex md:flex-row md:gap-5 text-white dark:text-gray-300 font-h1 md:text-2xl lg:text-3xl'>
            {Object.entries(categories).map(([key, label]) => (
                <ul 
                className='hover:underline hover:brightness-125 transition-all duration-300 ease-in-out hover:scale-105'
                key={key}>
                    {label.target.startsWith("http") ? (
                        <a
                            href={label.target}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-none cursor-pointer"
                        >
                            {label.category}
                        </a>
                    ) : (
                        <a
                            onClick={() => scroll(label.target)}
                            className="bg-transparent border-none cursor-pointer"
                        >
                            {label.category}
                        </a>
                    )}
                </ul>
            ))}
        </div>
    )
}

export default HeroCategories
