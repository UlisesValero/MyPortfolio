import Button from "../ui/Button"
import Map from "../ui/Map"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import LiveClock from "../ui/LiveClock"
import Social from "../ui/Social"

const WelcomeSection = () => {
    const { language } = useLanguage()
    
    return (
        <>
        <section className="px-4 flex flex-col text-black dark:text-white transition-all duration-300 mt-15">
            <div className="self-end mb-6">
                <Button text={translations[language].welcomeSection.contactButton} />
            </div>

            <h1 className="font-h1 text-5xl mt-8">
                {translations[language].welcomeSection.welcome1}
            </h1>

            <div className="flex flex-row items-center gap-2">
                <h1 className="text-5xl font-h1">
                    {translations[language].welcomeSection.welcome2}
                </h1>
                <div className="flex items-center">
                    <img
                        className="h-15 mr-0.5"
                        src="/assets/uLogoTitle.png"
                        alt="U Logo"
                    />
                    <h1 className="text-5xl font-h1">lises</h1>
                </div>
            </div>

            <h3 className="font-h3 font-semibold">
                {translations[language].welcomeSection.welcome3}
            </h3>
        </section>

        <Social />

        <div className="flex justify-center mt-30">
            <LiveClock />
        </div>

        <div className="flex justify-center mb-20">
            <Map />
        </div>
        </>
    )
}

export default WelcomeSection
