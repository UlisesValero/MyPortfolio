import Button from "./Button"
import { useFormInput } from "../../hooks/useFormInput"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"

const FormInput = () => {
  const { language } = useLanguage()
  const formInputs = useFormInput()
  return (
    <>
    <section className="flex flex-col gap-8 pt-6 px-3">
      {formInputs.map(inputs => (
        <div key={inputs.id} className="relative">
          <input
            type={inputs.type}
            id={inputs.id}
            placeholder=" "
            required
            className="peer w-full border border-dgray bg-lgray/60 dark:bg-ddgray text-white font-bold text-sm 
            rounded pt-7 pb-2 px-3 focus:outline-none dark:focus:border-salmon"
          />
          <label
            htmlFor={inputs.htmlFor}
            className="pointer-events-none absolute left-3 top-2 text-gray-400 text-sm transition-all  
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray 
                  peer-focus:top-0 peer-focus:text-sm dark:peer-focus:text-salmon peer-focus:text-white"
          >
            {inputs.label}
          </label>
        </div>
      ))}

 

    </section>
          <div className="flex justify-center w-full pt-10">
        <Button className={"w-[80%]"} text={translations[language].contactSection.buttonText} />
      </div>
      </>
  )
}

export default FormInput

