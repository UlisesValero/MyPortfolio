import { Reorder } from "framer-motion";
import { useState } from "react";
import { Experience } from "../../lib/Experience";
import Cards from "./Cards";

const ExperienceCards = () => {
  const [card, setCard] = useState(Experience);

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
