import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"

export const useFormInput = () => {
  const { language } = useLanguage()

  const formLabels = translations[language].form

  const contactSection = [
    {
      id: "1",
      type: "text",
      htmlFor: "name",
      label: formLabels.name
    },
    {
      id: "2",
      type: "email",
      htmlFor: "email",
      label: formLabels.email
    },
    {
      id: "3",
      type: "tel",
      htmlFor: "phone",
      label: formLabels.phone
    }
  ]

  return contactSection
}
