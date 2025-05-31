import FormInput from "../ui/FormInput"
import Resume from "../ui/Resume"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"


const Contact = () => {
    const {language} = useLanguage()

    return (
        <section className="flex justify-center pt-50 w-full">
            <div className="w-[90%] sm:w-[80%] rounded-r-3xl flex flex-col gap-30 lg:gap-10 lg:flex-row ">
            <div className="lg:w-1/2 pt-7 lg:flex lg:flex-col lg:items-center ">
                <h1 className="font-h1 text-3xl text-white dark:text-gradient-theme text-center py-3">{translations[language].contactSection.title}</h1>
                <form className="w-full pt-10" action="submit">
                    <FormInput/>
              </form>
            </div>
            <div className="lg:w-1/2 ">
                <Resume />
            </div>
            </div>
            </section>
    )
}

export default Contact