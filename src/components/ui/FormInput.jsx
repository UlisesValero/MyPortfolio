import Button from "./Button"
import { useFormInput } from "../../hooks/useFormInput"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import { useState, useRef } from "react"
import { MoonLoader } from 'react-spinners'
import EmailJs from "../../lib/EmailJs"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

const FormInput = () => {
  const { language } = useLanguage()
  const { contactSection, formState, setFormState } = useFormInput()
  const form = useRef()
  const [pending, setPending] = useState(false)
  const emailClient = new EmailJs()

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPending(true)

    try {
      await emailClient.send(formState)
      Toastify({
        text: `✅${translations[language].contactSection.successMessage}`,
        duration: 4000,
        gravity: "top",
        position: "right",
        close: true,
        stopOnFocus: true,
        style: {
          background: "#ffffff",
          color: "#000000",
          borderRadius: "8px",
          fontWeight: "bold",
        },
      }).showToast()

      setFormState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch {
      Toastify({
        text: `❌${translations[language].contactSection.errorMessage}`,
        duration: 4000,
        gravity: "top",
        position: "right",
        close: true,
        stopOnFocus: true,
        style: {
          background: "#ffffff",
          color: "#000000",
          borderRadius: "8px",
          fontWeight: "bold",
        },
      }).showToast()
    } finally {
      setPending(false)
    }
  };

  return (
    <section className="flex flex-col gap-8 pt-6 px-3">
      {pending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <MoonLoader size={40} color="#36d7b7" />
        </div>
      )}
      <form ref={form} onSubmit={handleSubmit}>
        {contactSection.map((input) => (
          <div key={input.id} className="relative flex justify-center space-y-6">
            {input.type === "textarea" ? (
              <textarea
                id={input.id}
                name={input.name}
                value={formState[input.name]}
                placeholder=" "
                onChange={handleChange}
                rows={6}
                required
                className="peer w-full md:w-[80%] border border-dgray bg-lgray/90 dark:bg-ddgray text-white font-bold text-sm theme-animation
                           rounded pt-6 pb-2 px-3 focus:outline-none border-green-200 dark:border-white dark:focus:border-salmon"
              />
            ) : (
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                value={formState[input.name]}
                placeholder=" "
                onChange={handleChange}
                required
                className="peer w-full md:w-[80%] border border-dgray bg-lgray/90 dark:bg-ddgray text-white font-bold text-sm theme-animation 
                           rounded pt-7 pb-2 px-3 focus:outline-none border-green-200 dark:border-white dark:focus:border-salmon focus:border-green-400"
              />
            )}
            <label
              htmlFor={input.htmlFor}
              className="pointer-events-none absolute left-2 sm:left-3 md:left-21 lg:left-17 top-2 text-white text-sm px-1 lg:px-3
                         peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray transition-all duration-200
                         peer-focus:top-0 peer-focus:text-sm dark:peer-focus:text-salmon peer-focus:text-green-400 focus:border-green-400"
            >
              {input.label}
            </label>
          </div>
        ))}
        <div className="flex justify-center w-full pt-6">
          <Button
            className="w-[70%] md:w-[30%] text-green-200 hover:text-green-400 dark:text-white dark:hover:text-black theme-animation"
            text={pending ? <MoonLoader size={16} color="#fff" /> : translations[language].contactSection.buttonText}
            disabled={pending}
          />
        </div>
      </form>
    </section>
  );
};

export default FormInput
