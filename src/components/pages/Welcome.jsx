import Button from "../ui/Button"
import Map from "../ui/Map"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import LiveClock from "../ui/LiveClock"
import Social from "../ui/Social"
import Blog from "../ui/Blog"

const Welcome = () => {
    const { language } = useLanguage()

    return (
        <>
            <section className="flex flex-col xmd:flex-row px-3 lg:px-25 text-white transition-all duration-300 pt-15">
                <div className="absolute right-1 md:hidden px-3 text-xs sm:text-md">
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
                            <img
                                className="h-20 md:h-25 xmd:h-40 mr-0.5"
                                src="/assets/uLogoTitle.png"
                                alt="U Logo"
                            />
                            <h1 className="text-7xl md:text-10xl font-h1">lises</h1>
                        </div>
                    </div>

                    <h3 className="font-h3 md:text-xl font-semibold pb-10">
                        {translations[language].welcomeSection.welcome3}
                    </h3>
                    <div className="hidden md:flex w-[30%]">
                        <Button text={translations[language].welcomeSection.contactButton} />
                    </div>
                                        </div>
                    <div className="pt-6">
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
