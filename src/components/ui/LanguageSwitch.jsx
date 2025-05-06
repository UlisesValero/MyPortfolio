import "../../App.css";
import Flag from 'react-world-flags'
import { useState } from "react";

const LanguageSwitch = () => {
    const [isSwitch, setIsSwitched] = useState(false);

    const toggleSwitch = () => {
        setIsSwitched(!isSwitch);
    };

    return (
        <div className="flex justify-end ">
        <button onClick={toggleSwitch}>
                {isSwitch ? <Flag className="w-8" code="724" /> : <Flag className="w-8" code="826" />}
            </button>
            </div>
    );
};

export default LanguageSwitch;