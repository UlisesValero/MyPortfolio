import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitch = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <div>
            <button
                className="mt-1 "
                onClick={toggleTheme}
            >
                {darkMode ? <Moon size={28} className="cursor-pointer theme-animation" color="white" /> : <Sun className="cursor-pointer theme-animation" size={28} color="yellow" />}
            </button>
        </div>
    );
};

export default ThemeSwitch;