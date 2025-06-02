import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";
import { AppWindow, ChevronsLeftRight, Database, UserPen } from "lucide-react";
import { motion } from "motion/react";

const CardsContent = () => {
  const { language } = useLanguage()
  const cards = translations[language].cards
  const iconMap = { AppWindow, ChevronsLeftRight, Database, UserPen }

  return (

    <div className="flex flex-wrap justify-center lg:justify-evenly gap-8 md:gap-5">
      {cards.map((card, i) => {
        const IconComponent = iconMap[card.icon]

        return (
          <motion.div
            whileHover={{ rotateY: 8, rotateX: -5 }}
            transition={{ type: 'spring', stiffness: 100 }}
            key={i}
            className="w-50 px-4 py-7 md:py-8 lg:w-75 lg:py-10 shadow-custom dark:border-salmon border-lgray border dark:shadow-salmon shadow-lgray rounded-xl flex flex-col gap-3 bg-lgray/60 dark:bg-ddgray"
          >
            {IconComponent && <IconComponent size={50} className="flex self-center dark:text-salmon text-white" />}
            <h1 className="text-xl font-bold text-gradient-theme pt-5 brightness-125">
              {card.title}
            </h1>
            <p className="text-black dark:font-normal font-semibold dark:text-gray-300 text-sm">
              {card.text}
            </p>
          </motion.div>)
      })}
    </div>
  );
};

export default CardsContent
