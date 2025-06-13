import SocialIcons from "../ui/SocialIcons"
import Blog from "../ui/Blog"
import useScroll from "../../hooks/useScroll"
import Button from "../ui/Button"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import { TbHomeHand } from "react-icons/tb";
import { scroll } from "../../lib/utils"
import { useNavigate, useLocation } from "react-router"
import { motion } from 'framer-motion'
import ScrollProgressBar from "../ui/ScrollProgressBar"



const Welcome = ({ isFooterVisible }) => {
    const { language } = useLanguage();
    const location = useLocation()
    const navigate = useNavigate()
    const handleClick = () => {
        if (location.pathname === '/') {
            scroll('hero')
        } else {
            navigate('/')
        }
    }
    const {scrolled} = useScroll()



    return (
        <>
            <section className="flex flex-col xmd:flex-row px-3 lg:px-25 text-white theme-animation pt-15 select-none">
                <div onClick={() => scroll("contact")} className="absolute top-27 right-1 md:hidden px-3 text-xs sm:text-md">
                    <Button className={"theme-animation"} text={translations[language].welcomeSection.contactButton} />
                </div>

                <div className="xmd:w-[65%] xmd:px-30 sm:px-15 pt-30 xmd:flex xmd:flex-col xmd:justify-evenly">
                    <div className="flex flex-col">
                        <h1 className="font-h1 text-7xl md:text-10xl text-gradient-theme theme-animation ">
                            {translations[language].welcomeSection.welcome1}
                        </h1>

                        <div className="flex flex-row items-center gap-4 text-gradient-theme ">
                            <h1 className="text-7xl md:text-10xl font-h1 theme-animation">
                                {translations[language].welcomeSection.welcome2}
                            </h1>
                            <div className="flex items-center">
                                <div
                                    className="w-20 h-25 bg-cover opacity-70 mr-0.5 theme-animation bg-[url(/assets/uLogoTitle.png)] dark:bg-[url(/assets/uLogoTitleDark.png)]">

                                </div>
                                <h1 className="text-7xl md:text-10xl font-h1 theme-animation">lises</h1>
                            </div>
                        </div>
                        <div className="flex items-center py-4">
                            <h3 className="typewriter font-h3 text-white dark:text-gray-300 md:text-xl font-semibold theme-animation" >
                                {translations[language].welcomeSection.welcome3}
                            </h3>
                        </div>
                        <div onClick={() => scroll("contact")} className="hidden md:flex w-[30%]">
                            <Button className={"theme-animation"} text={translations[language].welcomeSection.contactButton} />
                        </div>
                    </div>
                    <motion.div
                        className="z-50"
                        animate={scrolled > 300
                            ? { opacity: 0 }
                            : { display: "flex", alignItems: "top", paddingTop: "2rem", opacity: 1 }
                        }
                        initial={false}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <SocialIcons />
                    </motion.div>
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
                            bottom: "1rem",
                            right: "2rem",
                            zIndex: 50,
                        }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                    >
                        <div onClick={handleClick}>
                            <Button className={"theme-animation"} text={<TbHomeHand size={30} />} />
                        </div>
                    </motion.div>
                )}
            </section>
            {(
                <motion.div
                    className="z-50 bottom-6 left-6"

                    animate={
                        scrolled < 700 || isFooterVisible ? null : {
                            opacity: 1,
                            y: 0,
                        }
                    }
                    initial={{ opacity: 0, y: -300, }}
                    style={{ position: "fixed" }}
                    exit={{ opacity: 0, y: 300 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                >
                    <SocialIcons />
                </motion.div>
            )}
        </>
    )
}

export default Welcome
