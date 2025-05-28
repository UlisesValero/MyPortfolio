import FormInput from "../ui/FormInput"
import CvPdf from "../ui/CvPdf"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"


const ContactSection = () => {
    const {language} = useLanguage()

    return (
        <section className="flex justify-center pt-50 ">
            <div className="bg-white dark:bg-ddgray rounded-r-3xl flex  flex-col md:flex-row">
            <div>
                <h1 className="font-h1 text-3xl dark:text-white text-center py-3">{translations[language].contactSection.title}</h1>
                <form className="px-3" action="submit">
                    <FormInput/>
              </form>
            </div>
            <div className="">
                <CvPdf />
            </div>
            </div>
            </section>
    )
}

export default ContactSection