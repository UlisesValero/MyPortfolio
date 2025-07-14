import Button from "./Button"
import { useState } from "react"
import { translations } from "../../lib/translations"
import { useLanguage } from "../../context/LanguageContext"
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  const { language } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <section className="flex flex-col items-center gap-3 w-full h-full">
      <div className="flex flex-col items-center w-full h-full">
        <div className="h-full flex items-center pt-17">
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative"
          >
            <img
              src={translations[language].resume.href}
              className={`w-[350px] z-10 rounded-xl shadow-lg pb-2 transition-all duration-300 ${open ? "blur-xs brightness-75" : ""}`}
              title="CV Ulises Valero"
            />
            {open && (
              <a href={translations[language].resume.link} download={translations[language].resume.name}>
                <FiDownload
                  className="z-30 text-4xl hover:scale-150 text-white dark:hover:text-salmon hover:text-green-300 absolute bottom-1/2 right-40 cursor-pointer transition-all duration-300"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
