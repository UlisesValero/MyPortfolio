import { useLanguage } from "../context/LanguageContext"
import { translations } from "../lib/translations"
import { useState } from "react"

export const useFormInput = () => {
  const { language } = useLanguage()
  const formLabels = translations[language].form

  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const contactSection = [
    {
      id: "1",
      name: "fullName",
      type: "text",
      htmlFor: "fullName",
      label: formLabels.name,
      formState: formState.fullName
    },
    {
      id: "2",
      name: "email",
      type: "email",
      htmlFor: "email",
      label: formLabels.email,
      formState: formState.email
    },
    {
      id: "3",
      name: "phone",
      type: "tel",
      htmlFor: "phone",
      label: formLabels.phone,
      formState: formState.phone
    },
    {
      id: "4",
      name: "message",
      type: "textarea",
      htmlFor: "message",
      label: formLabels.text,
      formState: formState.message
    }
  ]

  return { contactSection, formState, setFormState }
}