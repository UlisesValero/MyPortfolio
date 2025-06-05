import Button from "../ui/Button"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import SocialIcons from "../ui/SocialIcons"
import Blog from "../ui/Blog"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { TbHomeHand } from "react-icons/tb";
import { scroll } from "../../lib/utils"


const Welcome = ({ isFooterVisible }) => {
    const { language } = useLanguage();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className="flex flex-col xmd:flex-row px-3 lg:px-25 text-white transition-all duration-300 pt-15">
                <div onClick={() => scroll("contact")} className="absolute top-20 right-1 md:hidden px-3 text-xs sm:text-md">
                    <Button text={translations[language].welcomeSection.contactButton} />
                </div>

                <div className="xmd:w-[65%] xmd:px-30 sm:px-15 pt-30 xmd:flex xmd:flex-col xmd:justify-evenly">
                    <div className="flex flex-col">
                        <h1 className="font-h1 text-7xl md:text-10xl text-gradient-theme ">
                            {translations[language].welcomeSection.welcome1}
                        </h1>

                        <div className="flex flex-row items-center gap-4 text-gradient-theme ">
                            <h1 className="text-7xl md:text-10xl font-h1">
                                {translations[language].welcomeSection.welcome2}
                            </h1>
                            <div className="flex items-center">
                                <div
                                    className="w-20 h-25 bg-cover opacity-70 mr-0.5 bg-[url(/assets/uLogoTitle.png)] dark:bg-[url(/assets/uLogoTitleDark.png)]">

                                </div>
                                <h1 className="text-7xl md:text-10xl font-h1">lises</h1>
                            </div>
                        </div>

                        <h3 className="font-h3 text-white dark:text-gray-300 md:text-xl font-semibold pt-2 pb-10">
                            {translations[language].welcomeSection.welcome3}
                        </h3>
                        <div onClick={() => scroll("contact")} className="hidden md:flex w-[30%]">
                            <Button text={translations[language].welcomeSection.contactButton} />
                        </div>
                    </div>
                    <motion.div
                        className="z-50"
                        animate={scrolled 
                            ? { visibility: "hidden" }
                            : { display: "flex", alignItems: "top", paddingTop: "2rem" }
                        }
                        initial={false}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <SocialIcons />
                    </motion.div>

                    {scrolled < 700 || isFooterVisible ? null : (
                        <motion.div
                            className="z-50"

                            animate={{
                                bottom: "1rem",
                                left: "2rem",
                                opacity: 1,
                                y: 0,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            style={{ position: "fixed" }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                        >
                            <SocialIcons />
                        </motion.div>
                    )}

                </div>

                <div className="xmd:w-[35%] flex flex-col">
                    <div className="flex flex-col items-center pt-50 md:pt-30">
                        <Blog />
                    </div>
                </div>

                {scrolled < 700 || isFooterVisible ? null : (
                    <motion.div
                        className="hidden lg:flex"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            position: "fixed",
                            bottom: "0.70rem",
                            left: "48%",
                            zIndex: 50,
                        }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                    >
                        <div onClick={() => scroll("hero")}>
                            <Button text={<TbHomeHand size={30} />} />
                        </div>
                    </motion.div>
                )}
            </section>
        </>
    )
}

export default Welcome
