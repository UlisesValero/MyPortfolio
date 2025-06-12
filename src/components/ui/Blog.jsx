import { motion } from "framer-motion";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";
import Button from "./Button";
import { Link } from "react-router";

const Blog = () => {
    const { language } = useLanguage();

    return (
        <motion.div
            className="relative h-fit max-w-sm rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 dark:bg-gradient-to-t dark:from-salmon dark:to-[#563F74] border-2 p-6 text-white shadow-2xl theme-animation"
            whileHover={{ rotateY: 6, rotateX: -3 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <h2 className="text-2xl font-h1 tracking-wide">{translations[language].blog.title}</h2>
            <p className=" font-p text-sm opacity-90">
                {translations[language].blog.text}
            </p>

<Link
  to="/hobbies"
  className="flex pt-20 items-end"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    className="w-full font-h3 group inline-flex justify-center gap-2 rounded-lg px-4 py-2 text-sm shadow-md transition hover:scale-105 hover:border-2 hover:border-white dark:hover:border-black dark:hover:text-black theme-animation"
    text={"Enter the Lab"}
  />
</Link>
        </motion.div>
    );
};

export default Blog;



