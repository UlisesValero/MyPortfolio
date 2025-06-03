import Button from "../ui/Button"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import Social from "../ui/Social"
import Blog from "../ui/Blog"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { TbHomeHand } from "react-icons/tb";
import { useLocation, Link } from "react-router-dom"


const Welcome = () => {
    const { language } = useLanguage()
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleHomeClick = (e) => {
        if (location.pathname === "/") {
            e.preventDefault();
            const section = document.getElementById("hero");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <section className="flex flex-col xmd:flex-row px-3 lg:px-25 text-white transition-all duration-300 pt-15">
                <div className="absolute top-20 right-1 md:hidden px-3 text-xs sm:text-md">
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
                        <Link to={"/contact"} className="hidden md:flex w-[30%]">
                            <Button text={translations[language].welcomeSection.contactButton} />
                        </Link>
                    </div>
                    <motion.div
                        className="z-50"
                        animate={scrolled
                            ? { visibility: "hidden"}
                            : { display: "flex", alignItems: "top", paddingTop:"2rem" }
                        }
                        initial={false}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Social />
                    </motion.div>

                    <motion.div
                        className="z-50"
                        animate={
                            scrolled
                                ? { bottom: "1rem", left: "2rem", opacity: 1 }
                                : { bottom: "-5rem", left: "1rem", opacity: 0 }
                        }
                        initial={false}
                        style={{ position: "fixed" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Social />
                    </motion.div>

                </div>

                <div className="xmd:w-[35%] flex flex-col  ">
                    <div className="flex flex-col items-center pt-50 md:pt-30">
                        <Blog />
                    </div>
                </div>

                {scrolled && (
                    <motion.div
                        className="hidden lg:flex"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0, position: "fixed", bottom: "0.70rem", left: "48%", zIndex: 50 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                    >
                        <Link to={"/"} onClick={handleHomeClick}>
                            <Button text={<TbHomeHand size={30} />} />
                        </Link>
                    </motion.div>
                )}
            </section>
        </>
    )
}

export default Welcome
