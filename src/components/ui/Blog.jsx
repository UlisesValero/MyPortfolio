import { motion } from "framer-motion";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";
import Button from "./Button";

const Blog = () => {
    const { language } = useLanguage();

    return (
        <motion.div
            className="relative h-fit max-w-sm rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 dark:bg-gradient-to-t dark:from-salmon dark:to-[#563F74] border-2 p-6 text-white shadow-2xl"
            whileHover={{ rotateY: 6, rotateX: -3 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <h2 className="text-2xl font-h1 tracking-wide">{translations[language].blog.title}</h2>
            <p className=" font-p text-sm opacity-90">
                {translations[language].blog.text}
            </p>

            <a
                className="flex pt-20 items-end"
                href="/hobbies"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                    className={"w-full font-h3 group inline-flex items-center gap-2 rounded-lg  px-4 py-2 text-sm  shadow-md transition hover:scale-105"}
                    text={"Enter the Lab"}
                />
            </a>
        </motion.div>
    );
};

export default Blog;



