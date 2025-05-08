import "../../App.css"
import Button from "../ui/Button"
import Map from "../ui/Map"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import LiveClock from "../ui/LiveClock"

const WelcomeSection = () => {
    const { language } = useLanguage()
    return (
        <>
        <section className="px-4 flex flex-col text-black dark:text-white transition-all duration-300">
            <div className="flex justify-end">
                <Button text={translations[language].welcomeSection.contactButton}/>
            </div>

            <h1 className="mt-15 font-h1 text-5xl">{translations[language].welcomeSection.welcome1}</h1>

            <div className="flex flex-row items-center gap-2">
                <h1 className="text-5xl font-h1">{translations[language].welcomeSection.welcome2}</h1>
                <div className="flex items-center">
                    <img
                        className="h-15 mr-0.5 "
                        src="/assets/uLogoTitle.png"
                        alt="U Logo"
                    />
                    <h1 className="text-5xl font-h1">lises</h1>
                </div>
            </div>
            <h3 className="font-h3 font-semibold ">{translations[language].welcomeSection.welcome3}</h3>
        </section>
        <div className="flex justify-center mt-30">
            <LiveClock />
        </div>
        <div className="flex justify-center mb-20">
            <Map/>
        </div>
        </>
    )
}

export default WelcomeSection