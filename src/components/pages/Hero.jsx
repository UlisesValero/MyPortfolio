import "../../App.css"
import DeployedPanel from "../ui/DeployedPanel"
import PanelIcon from "../ui/PanelIcon"
import ThemeSwitch from "../../hooks/ThemeSwitch"
import LanguageSwitch from "../../hooks/LanguageSwitch"
import HeroCategories from "../ui/HeroCategories"

const Hero = () => {
    return (
<header className="flex md:justify-end">
  <div className="bg-lgray/60 dark:bg-black/30 w-[100vw] flex justify-center md:justify-start items-center gap-7 md:gap-3 md:px-5 z-30 fixed">
    <LanguageSwitch />
    <PanelIcon />
    <ThemeSwitch />
  </div>
  <div className="hidden md:flex md:justify-end md:items-center md:px-5 md:fixed">
    <HeroCategories />
  </div>
</header>

    )
}

export default Hero