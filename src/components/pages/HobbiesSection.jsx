import { motion } from "framer-motion";
import { StepForward } from 'lucide-react';
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";

const HobbiesSection = () => {
    const { language } = useLanguage()
    return (
        <div className="flex justify-center mt-30 ">
        <section className="lg:relative mb-50 h-fit lg:w-[90%] justify-center flex flex-row overflow-hidden ">
            <motion.div
                className="lg:absolute lg:inset-0 lg:bg-[url(/assets/BartolomeSpoiler.PNG)] lg:bg-center lg:bg-no-repeat lg:bg-contain lg:z-0 "
                whileHover={{
                    y: -100,
                    transition: {
                        type: "spring", stiffness: 50
                    }
                }}
            />

            <div className="lg:hidden bg-[url(/assets/BartolomeSpoiler.PNG)] bg-cover bg-top-left w-1/3" />

            <motion.div
                className="w-full flex items-center lg:w-[80dvw]  bg-lgray dark:bg-ddgray lg:h-[70%] lg:self-end z-10 hover:h-full ease-out duration-400 "
            >
                <div className="bg-white py-1 px-1 rounded-r-2xl lg:hidden flex-shrink-0">
                    <StepForward />
                </div>

                <div className="px-3 dark:text-white ">
                    <h1 className="text-3xl font-h1 px-4 mb-2 ">{translations[language].hobbiesSection.title}</h1>
                    <p className="font-p  text-sm lg:text-xl px-4">{translations[language].hobbiesSection.text}</p>
                </div>
            </motion.div>
        </section>
        </div>
    );
};

export default HobbiesSection;
