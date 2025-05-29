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
            <section className="flex flex-col xmd:flex-row px-3  text-black dark:text-white transition-all duration-300 pt-15">
                                    <div className="absolute right-1 md:hidden  px-3 text-xs sm:text-md">
                        <Button text={translations[language].welcomeSection.contactButton} />
                    </div>

                <div className="xmd:w-[60%] xmd:px-30 sm:px-15 pt-30 ">
                    <div className="">
                        <h1 className="font-h1 text-6xl md:text-8xl ">
                            {translations[language].welcomeSection.welcome1}
                        </h1>
                    </div>

                    <div className="flex flex-row items-center gap-4 ">
                        <h1 className="text-6xl md:text-8xl font-h1">
                            {translations[language].welcomeSection.welcome2}
                        </h1>
                        <div className="flex items-center">
                            <img
                                className="h-15 md:h-25 xmd:h-40 mr-0.5"
                                src="/assets/uLogoTitle.png"
                                alt="U Logo"
                            />
                            <h1 className="text-6xl md:text-8xl font-h1">lises</h1>
                        </div>
                    </div>

                    <h3 className="font-h3 md:text-xl font-semibold pb-10">
                        {translations[language].welcomeSection.welcome3}
                    </h3>
                    <div className="hidden md:flex w-[30%]">
                        <Button text={translations[language].welcomeSection.contactButton} />
                    </div>
                    <div className="xmd:h-full xmd:items-end  hidden xmd:flex ">
                        <Social />
                    </div>
                </div>

                <div className="xmd:[40%] flex flex-col pt-30 ">
                    <div className="hidden md:flex md:flex-col md:items-center">
                        <Blog />
                    </div>
                </div>
                                    <div className="pt-45 xmd:hidden">
                        <Social />
                    </div>
            </section>
        </>
    )
}

export default Welcome
