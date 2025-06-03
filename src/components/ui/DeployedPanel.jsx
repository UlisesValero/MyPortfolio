import { MdOutlineCloseFullscreen } from "react-icons/md";
import { usePanel } from '../../context/PanelContext';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../lib/translations';
import Button from './Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const DeployedPanel = () => {
    const { isAnimating, togglePanelTimed } = usePanel();
    const { language } = useLanguage();
    const categories = translations[language]?.heroCategories

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-70 h-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50 
                    bg-lgray dark:bg-ddgray text-white font-h1 text-xl rounded-r-3xl shadow-xl"
        >
            <div className="flex flex-col items-center justify-center gap-5 h-full relative">
                <button
                    onClick={togglePanelTimed}
                    className={`transition-transform duration-300 ease-in-out
                    ${isAnimating ? 'rotate-180 scale-75 opacity-50' : 'rotate-0 scale-100 opacity-100'}
                    absolute top-1 right-1 focus:bg-white dark:focus:bg-salmon p-2 rounded-full text-black`}
                >
                    <MdOutlineCloseFullscreen size={30} />
                </button>
                {Object.entries(categories).map(([key, label]) => (
                    <ul
                        className='flex'
                        key={key}>
                        {label.target.startsWith("http") ? (
                            <a
                                href={label.target}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-extralight w-fit dark:bg-ddgray bg-lgray/30 text-white dark:shadow-salmon shadow-lgray dark:border-salmon border-lgray border shadow-custom py-3 px-6 rounded-2xl transition-all duration-300 ease-in-outhover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-lgray dark:focus:ring-salmon dark:hover:bg-salmon/70 hover:bg-lgray/70 hover:scale-105 cursor-pointer"
                            >
                                {label.category}
                            </a>
                        ) : (
                            <Link
                                to={`/${label.target === 'hero' ? '' : label.target}`}
                                className="bg-transparent border-none cursor-pointer"
                            >
                                {label.category}
                            </Link>
                        )}
                    </ul>
                ))}
            </div>
        </motion.div>
    );
};

export default DeployedPanel;
