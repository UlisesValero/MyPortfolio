import { useContext, createContext, useState } from "react";

const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en")

    const toggleLanguage = (lang) => {
        setLanguage(lang)
    }

    const handleSwitch = () => {
        toggleLanguage(language === "en" ? "es" : "en");
      };

    const values = {
        toggleLanguage,
        language,
        handleSwitch
    }

    return(
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)