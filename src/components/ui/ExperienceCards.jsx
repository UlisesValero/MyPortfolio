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
    <Reorder.Group
      values={card}
      onReorder={setCard}
      className="flex flex-col gap-4 p-4"
    >
      {card.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          className=""
        >
          <Cards
            image={<img className=" rounded-xl select-none pointer-events-none " src={item.image}/>}
            name={item.name}
            description={item.description}
            status={item.status}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default ExperienceCards;
