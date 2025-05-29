import { motion } from "framer-motion";
import { StepForward } from 'lucide-react';
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";

import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const { language } = useLanguage()
    //   const navigate = useNavigate();

    return (
<motion.div
      className="relative h-[50vh] max-w-sm rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 p-6 text-white shadow-2xl"
      whileHover={{ rotateY: 6, rotateX: -3 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="absolute top-3 right-3 text-xs italic opacity-60">Warning: contains personality 😄</div>

      <h2 className="text-2xl font-semibold tracking-wide">Beyond the Code</h2>
      <p className="mt-2 text-sm opacity-90">
        Explore the creative side of a front-end dev — from music and games to late-night side quests.
      </p>

      <div className="mt-auto flex justify-start pt-10">
        <button
        //   onClick={() => navigate('/hobbies')}
          className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-md transition hover:scale-105"
        >
          Enter the Lab
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
    );
};

export default Blog



