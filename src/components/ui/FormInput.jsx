import Button from "./Button"
import { useFormInput } from "../../hooks/useFormInput"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const FormInput = () => {
  const { language } = useLanguage()
  const formInputs = useFormInput()
  const form = useRef()
  const emailKey = import.meta.env.VITE_EMAIL_KEY
  const serviceKey = import.meta.env.VITE_SERVICE_KEY
  const templateKey = import.meta.env.VITE_TEMPLATE_KEY

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm({serviceKey}, {templateKey}, form.current, {
        publicKey: {emailKey},
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <section className="flex flex-col gap-8 pt-6 px-3">
      {formInputs.map(input => (
        <div key={input.id} className="relative">
          {
            input.type === "textarea" ? ( 
            <textarea
            ref={form} 
            onSubmit={sendEmail}
            type={input.type}
            id={input.id}
            placeholder=" "
              rows={6}
            required
            className="peer w-full border border-dgray bg-lgray/60 dark:bg-ddgray text-white font-bold text-sm 
            rounded  pt-6 pb-2 px-3 focus:outline-none dark:focus:border-salmon"
          />)
          :
          (
            <input
            ref={form} 
            onSubmit={sendEmail}
            type={input.type}
            id={input.id}
            placeholder=" "
            required
            className="peer w-full border border-dgray bg-lgray/60 dark:bg-ddgray text-white font-bold text-sm 
            rounded pt-7 pb-2 px-3 focus:outline-none dark:focus:border-salmon"
          />
          )
          }
          <label
            htmlFor={input.htmlFor}
            className="pointer-events-none absolute left-3 top-2 text-gray-400 text-sm transition-all  
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray 
                  peer-focus:top-0 peer-focus:text-sm dark:peer-focus:text-salmon peer-focus:text-white"
          >
            {input.label}
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

