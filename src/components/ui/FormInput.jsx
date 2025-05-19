import Button from "./Button"
import { useFormInput } from "../../hooks/useFormInput"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"

const FormInput = () => {
  const { language } = useLanguage()
  const formInputs = useFormInput()
  return (
    <section className="flex flex-col gap-5">
      {formInputs.map(inputs => (
        <div key={inputs.id} className="relative">
          <input
            type={inputs.type}
            id={inputs.id}
            placeholder=" "
            required
            className="peer w-[80vw] px-3 border border-dgray dark:bg-ddgray dark:text-white text-sm 
            rounded pt-7 pb-2 focus:outline-none focus:border-lblue"
          />
          <label
            htmlFor={inputs.htmlFor}
            className="pointer-events-none absolute left-3 top-2 text-gray-400 text-sm transition-all  
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray 
                  peer-focus:top-0 peer-focus:text-sm peer-focus:text-lblue"
          >
            {inputs.label}
          </label>
        </div>
      ))}


      <div className="">
        <Button text={translations[language].contactSection.buttonText} />
      </div>
    </section>
  )
}

export default FormInput

