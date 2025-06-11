import PanelIcon from "../ui/PanelIcon";
import ThemeSwitch from "../../hooks/ThemeSwitch";
import LanguageSwitch from "../../hooks/LanguageSwitch";
import HeroCategories from "../ui/HeroCategories";
import LiveClock from "../ui/LiveClock";
import { Link } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

const Hero = () => {
  const {scrolled} = useScroll()


  return (
    <header
      className={`fixed top-0 w-full z-30 theme-animation ${scrolled > 300
          ? "h-18 shadow-lg  backdrop-blur-md bg-lgray/40 dark:bg-black/60"
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
          <HeroCategories LinkComponent={Link} />
        </div>
      </div>
      {scrolled > 300 ? null : (
        <marquee 
        behavior= "alternate"
        className="pt-1  bg-lgray/60 border-t dark:bg-black/30 text-white dark:text-salmon theme-animation">
          <LiveClock />
        </marquee>
      )}
    </header>
  );
};

export default Hero;
