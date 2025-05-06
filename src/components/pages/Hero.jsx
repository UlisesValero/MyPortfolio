import "../../App.css"
import DeployedPanel from "../ui/DeployedPanel"
import PanelIcon from "../ui/PanelIcon"
import ThemeSwitch from "../ui/ThemeSwitch"
import LanguageSwitch from "../ui/LanguageSwitch"

const Hero = () => {
    return (
<header className="h-[10vh] flex justify-center">
  <section className="bg-black/30 w-full flex justify-center items-center gap-5">
    <LanguageSwitch />
    <PanelIcon />
    <ThemeSwitch />
  </section>
</header>

    )
}

export default Hero