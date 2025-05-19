import FormInput from "../ui/FormInput"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"

const ContactSection = () => {
    const {language} = useLanguage()

    return (
        <section className="flex justify-center md:flex-row mt-25">
            <div className="bg-lgray dark:bg-ddgray md:w-1/2 flex flex-col gap-6 rounded-r-3xl">
            <div>
                <h1 className="font-h1 text-3xl dark:text-white text-center py-3">{translations[language].contactSection.title}</h1>
            </div>
            <div className="px-3">
                <form action="submit">
                    <FormInput/>
              </form>
            </div>
            <div className="md:w-1/2">
                CURRICULUM
            </div>
            </div>
            </section>
    )
}

export default ContactSection