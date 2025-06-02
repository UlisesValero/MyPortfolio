import Button from "../ui/Button"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import Social from "../ui/Social"
import Blog from "../ui/Blog"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

const Welcome = () => {
    const { language } = useLanguage()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
                        <div className="hidden md:flex w-[30%]">
                            <Button text={translations[language].welcomeSection.contactButton} />
                        </div>
                    </div>
                    <motion.div
                        className="pt-6 z-50 hidden"
                        animate={scrolled
                            ? { position: "fixed", top: "0.25rem", left: "45%" }
                            : { position: "relative", top: 0, left: 0 }
                        }
                        initial={false}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Social />
                    </motion.div>
                    <div className="lg:hidden pt-6 z-50">
                        <Social />
                    </div>
                </div>

                <div className="xmd:w-[35%] flex flex-col  ">
                    <div className="flex flex-col items-center pt-50 md:pt-30">
                        <Blog />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome
