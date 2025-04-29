import "../App.css"
import DeployedPanel from "../ui/DeployedPanel"
import Panel from "../ui/Panel"
import ThemeSwitch from "../ui/ThemeSwitch"

const Hero = () => {
    return (
        <header className="flex justify-between items-center p-1.5">
            <div
           className="w-1/3">
            <Panel/>
            </div>
            <div className="w-1/3 flex justify-center">
                <img 
                className="h-20"
                src="../src/assets/uLogo.png" 
                alt="Logo de mi inicial"/>
            </div>
            <div className="w-1/3 flex justify-end">
                <ThemeSwitch/>
            </div>
        </header>
    )
}

export default Hero