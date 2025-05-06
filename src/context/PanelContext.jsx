import { createContext, useContext, useState } from "react";

const PanelContext = createContext()

export const PanelProvider = ( {children} ) => {
    const [deploy, setDeploy] = useState(false)

    const togglePanel = () => {
        setDeploy(!deploy)
    }

    const values = {
        deploy,
        togglePanel,
    }

return (
    <PanelContext.Provider value={values}> 
    {children}
    </PanelContext.Provider>
)}

export const usePanel = () => useContext(PanelContext)








