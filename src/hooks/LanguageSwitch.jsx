import Flag from "react-world-flags"
import { useLanguage } from "../context/LanguageContext"

const LanguageSwitch = () => {
  const { language, handleSwitch } = useLanguage()

  return (
    <div className="flex justify-end">
      <button onClick={handleSwitch}>
        {language === "en" ? (
          <Flag className="w-8 cursor-pointer" code="826" />
        ) : (
          <Flag className="w-8 cursor-pointer" code="724" />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitch
