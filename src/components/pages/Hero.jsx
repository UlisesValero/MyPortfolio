import PanelIcon from "../ui/PanelIcon";
import ThemeSwitch from "../../hooks/ThemeSwitch";
import LanguageSwitch from "../../hooks/LanguageSwitch";
import HeroCategories from "../ui/HeroCategories";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? "h-20 shadow-lg  backdrop-blur-md dark:bg-black/60"
          : "h-16 bg-lgray/60 dark:bg-black/30"
      }`}
    >
      <div className="flex justify-between items-center h-full px-6 md:px-12">
        <div className="flex items-center gap-6">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>

        <PanelIcon />

        <div className="hidden md:flex">
          <HeroCategories />
        </div>
      </div>
    </header>
  );
};

export default Hero;
