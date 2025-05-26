import { useEffect, useState } from "react";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";

const LiveClock = () => {
    const { language } = useLanguage()
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-lg font-h1 dark:text-white w-fit p-1 rounded-t-xl bg-lgray/30 dark:bg-ddgray/75 transition-all duration-300">
        ⏳{translations[language].welcomeSection.clockInfo1} {time.toLocaleTimeString()}{translations[language].welcomeSection.clockInfo2}
    </div>
  );
};

export default LiveClock;
