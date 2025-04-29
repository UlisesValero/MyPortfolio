import "../App.css";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeSwitch = () => {
    const [isSwitch, setIsSwitched] = useState(false);

    const toggleSwitch = () => {
        setIsSwitched(!isSwitch);
    };

    return (
        <div className="bg-amber-400 w-13 h-7 rounded-4xl z-10 relative">
            <button
                onClick={toggleSwitch}
                className={`bg-black w-6.5 h-7 rounded-4xl z-20 absolute top-0 transition-transform duration-300 ${
                    isSwitch ? "translate-x-full" : "translate-x-0"
                }`}
            >
                {isSwitch ? <Moon color="blue" /> : <Sun color="yellow" />}
            </button>
        </div>
    );
};

export default ThemeSwitch;