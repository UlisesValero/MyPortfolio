import { motion } from "framer-motion";
import { StepForward } from 'lucide-react';

const HobbiesSection = () => {
    return (
        <div className="flex justify-center">
        <section className="lg:relative mb-50 h-[90dvh] lg:w-[90%] justify-center flex flex-row overflow-hidden bg-ddgray">
            <motion.div
                className="lg:absolute lg:inset-0 lg:bg-[url(/assets/BartolomeSpoiler.PNG)] lg:bg-center lg:bg-no-repeat lg:bg-contain lg:z-0 "
                whileHover={{
                    y: -100,
                    transition: {
                        type: "spring", stiffness: 50
                    }
                }}
            />

            <div className="lg:hidden bg-[url(/assets/BartolomeSpoiler.PNG)] bg-cover bg-top-left w-1/3" />

            <motion.div
                className="w-full flex items-center lg:w-[80dvw] bg-ddgray lg:h-[70%] lg:self-end z-10 hover:h-full ease-out duration-400 "
            >
                <div className="bg-white py-1 px-1 rounded-r-2xl lg:hidden flex-shrink-0">
                    <StepForward />
                </div>

                <div className="ml-4">
                    <h1 className="text-3xl font-h1 text-white px-4 mb-2">Sobre mi</h1>
                    <p className="font-p text-white text-sm lg:text-xl px-4">
                        Además de mi pasión por el desarrollo web, tengo varios hobbies que disfruto y que forman parte de quién soy. Como buen friki, los videojuegos ocupan un lugar importante en mi día a día, tanto como forma de entretenimiento como fuente de inspiración creativa. También me encanta jugar al fútbol: siempre estoy listo para un buen partido y no se me da nada mal.

Pero si hay algo que realmente me relaja y me divierte es cocinar. Aunque no tengo un título que lo avale, muchos podrían decir que cocino mejor que algunos profesionales. En esta sección vas a encontrar videos e imágenes mías cocinando, una foto de mi setup gamer, y quizás alguna imagen dándolo todo en la cancha.

Una forma de mostrarte más allá del código, compartiendo lo que me apasiona en mi tiempo libre.                  </p>
                </div>
            </motion.div>
        </section>
        </div>
    );
};

export default HobbiesSection;
