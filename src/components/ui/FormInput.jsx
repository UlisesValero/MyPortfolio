import Button from "./Button";
import { useFormInput } from "../../hooks/useFormInput";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";
import { useRef, useState } from "react";
import EmailJs from "../../lib/EmailJs";

const FormInput = () => {
  const { language } = useLanguage()
  const { contactSection, formState, setFormState } = useFormInput()
  const form = useRef()
  const tooltipRef = useRef();
  const [pending, setPending] = useState(false)
  const emailClient = new EmailJs()

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPending(true)

    await emailClient.send(formState)

    console.log("Formulario enviado:", formState)
    tooltipRef.current.style.display = "block"

    setTimeout(() => {
      tooltipRef.current.style.display = "none"
    }, 3000);

    setFormState({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });

    setPending(false)
  }

  return (
    <section className="flex flex-col gap-8 pt-6 px-3">
      <form ref={form} onSubmit={handleSubmit}>
        {contactSection.map((input) => (
          <div key={input.id} className="relative flex space-y-6">
            {input.type === "textarea" ? (
              <textarea
                type={input.type}
                id={input.id}
                name={input.name}
                value={input.formState}
                placeholder=" "
                onChange={handleChange}
                rows={6}
                required
                className="peer w-full border border-dgray bg-lgray/90 dark:bg-ddgray text-white font-bold text-sm theme-animation
                           rounded pt-6 pb-2 px-3 focus:outline-none border-green-200 dark:border-white dark:focus:border-salmon"
              />
            ) : (
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                value={input.formState}
                placeholder=" "
                onChange={handleChange}
                required
                className="peer w-full border border-dgray bg-lgray/90 dark:bg-ddgray text-white font-bold text-sm theme-animation 
                           rounded pt-7 pb-2 px-3 focus:outline-none border-green-200 dark:border-white dark:focus:border-salmon focus:border-green-400"
              />
            )}
            <label
              htmlFor={input.htmlFor}
              className="pointer-events-none absolute left-3 top-2 text-white text-sm theme-animation  
                         peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray theme-animation
                         peer-focus:top-0 peer-focus:text-sm dark:peer-focus:text-salmon peer-focus:text-green-400 focus:border-green-400"
            >
              {input.label}
            </label>
          </div>
        ))}
        <div className="flex justify-center w-full pt-10 ">
          <Button
            className={"w-[80%] text-green-200 hover:text-green-400 dark:text-white dark:hover:text-black theme-animation"}
            text={translations[language].contactSection.buttonText}
            disabled={pending}
          />
        </div>
      </form>
      <div
        ref={tooltipRef}
        className="hidden text-center text-green-500 font-bold pt-4"
      >
        ¡Mensaje enviado!
      </div>
    </section>
  );
};

export default FormInput;
