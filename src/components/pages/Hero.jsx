import "../../App.css"
import DeployedPanel from "../ui/DeployedPanel"
import PanelIcon from "../ui/PanelIcon"
import ThemeSwitch from "../../hooks/ThemeSwitch"
import LanguageSwitch from "../../hooks/LanguageSwitch"

const Hero = () => {
    return (
<header className="flex justify-center">
  <section className="bg-lgray/60 dark:bg-black/30 w-full flex justify-center items-center gap-7 fixed z-50">
    <LanguageSwitch />
    <PanelIcon />
    <ThemeSwitch />
  </section>
</header>

    )
}

export default Hero