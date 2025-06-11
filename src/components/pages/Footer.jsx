import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { translations } from '../../lib/translations'
import { useLanguage } from '../../context/LanguageContext'
import SocialIcons from "../ui/SocialIcons";
import { useRef, useEffect } from 'react'
import { scroll } from "../../lib/utils";





const Footer = ({ setIsFooterVisible }) => {
  const { language } = useLanguage();
  const categories = translations[language]?.heroCategories;
  const footerTitles = translations[language]?.footer;

  const footerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [setIsFooterVisible]);

  return (
    <footer ref={footerRef} className="bg-lgray/30 dark:bg-ddgray text-white py-5 px-6">      
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 ">
      <div>
        <h2 className="text-2xl font-bold">{footerTitles.portfolio}</h2>
        <p className="mt-2 text-sm text-gray-400">{footerTitles.subTitle}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold pb-3">{footerTitles.linksTitle}</h3>
        <ul className="flex flex-col space-y-2 text-gray-400">
          {Object.entries(categories).map(([key, label]) => (
            <li key={key}>
              {label.target.startsWith("http") ? (
                <a
                  href={label.target}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 hover:text-green-300 hover:underline dark:hover:text-salmon transition-all duration-200 cursor-crosshair"
                >
                  {label.category}
                </a>
              ) : (
                <div
                  onClick={() => scroll(label.target)}
                  className="hover:scale-110 hover:text-green-300 hover:underline dark:hover:text-salmon transition-all duration-200 cursor-crosshair"
                >
                  {label.category}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">{footerTitles.stayConnected}</h3>
        <SocialIcons className="text-2xl cursor-crosshair" />
      </div>
    </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Ulises Valero. {footerTitles.rightsText}
      </div>
    </footer>
  );
};


export default Footer;

