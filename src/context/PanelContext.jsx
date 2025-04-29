import { createContext, useContext, useState } from "react";

export const PanelContext = createContext()
export const UsePanel = () => useContext(PanelContext)

export const PanelProvider = ( {children} ) => {
    const [deploy, setDeploy] = useState(false)

    const togglePanel = () => {
        setDeploy(!deploy)
    }

    const values = () => {
        togglePanel
    }

return (
    <PanelContext.Provider values={values}> 
    {children}
    </PanelContext.Provider>
)
}







