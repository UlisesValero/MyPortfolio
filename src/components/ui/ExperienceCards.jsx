import { Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";
import Cards from "./Cards";


const ExperienceCards = () => {
  const { language } = useLanguage()
  const [card, setCard] = useState(translations.en.experienceSection);

  useEffect(() => {
    setCard(translations[language].experienceSection)
  }, [language])

  return (
    <section>
    <div className="flex justify-center">
      <h1 className="font-h1 text-3xl dark:text-white">{translations[language].projectTitle.projectTitle}</h1>
    </div>
    <div>
    <Reorder.Group
      values={card}
      onReorder={setCard}
      className="flex flex-col gap-4 p-4"
    >
      {card.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
        >
          <Cards
            image={<img className="rounded-2xl max-w-[220px]  md:object-cover select-none pointer-events-none " src={item.image}/>}
            name={item.name}
            description={item.description}
            status={item.status}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
    </div>
    </section>
  );
};

export default ExperienceCards;
