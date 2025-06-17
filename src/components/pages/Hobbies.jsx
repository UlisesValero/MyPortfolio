import Hero from "./Hero"
import FoodContent from "../ui/FoodContent"
import FootballContent from "../ui/FootballContent"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import Footer from "./Footer"

const Hobbies = () => {
    const { language } = useLanguage()

    return (
        <section className="bg-theme2 pt-30 md:pt-40 flex flex-col justify-between"> 
        <Hero />
            <div className="">
                <h1 className=" flex items-center justify-center font-h1 text-5xl text-gradient-theme md:pb-20 dark:brightness-150">{translations[language].hobbiesTitles.title}</h1>
            <FoodContent />
            </div>
            <div className="pt-40">
            <h1 className="flex items-center justify-center font-h1 text-5xl text-gradient-theme md:pb-20 dark:brightness-150">{translations[language].hobbiesTitles.title2}</h1>
            <FootballContent />
            </div>
        <Footer/>
</section>
    )
}

export default Hobbies

