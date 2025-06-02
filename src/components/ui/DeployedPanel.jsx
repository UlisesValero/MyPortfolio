import { MdOutlineCloseFullscreen } from "react-icons/md";
import { usePanel } from '../../context/PanelContext';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../lib/translations';
import Button from './Button';
import { motion } from 'framer-motion';

const DeployedPanel = () => {
    const { isAnimating, togglePanelTimed } = usePanel();
    const { language } = useLanguage();

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0}}
            animate={{ scale: 1, opacity: 1}}
            exit={{ scale: 0.2, opacity: 0}}
            transition={{ duration: 0.3 }}
            className="w-70 h-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50 
                    bg-lgray dark:bg-ddgray dark:text-white font-h1 text-xl rounded-r-3xl shadow-xl"
        >
            <div className="flex flex-col items-center justify-center gap-5 h-full relative">
                <button
                    onClick={togglePanelTimed}
                    className={`transition-transform duration-300 ease-in-out
                    ${isAnimating ? 'rotate-180 scale-75 opacity-50' : 'rotate-0 scale-100 opacity-100'}
                    absolute top-1 right-1 focus:bg-white dark:focus:bg-salmon p-2 rounded-full`}
                >
                    <MdOutlineCloseFullscreen  size={30} />
                </button>
                <div>{translations[language].projectTitle.projectTitle}</div>
                <div>{translations[language].deployedPanel.workWithMe}</div>
                <div>Blog</div>
                <div className="pt-10 ">
                    <Button className={"font-extralight"} text={translations[language].deployedPanel.stayConnected} />
                </div>
            </div>
        </motion.div>
    );
};

export default DeployedPanel;
