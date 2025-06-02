import { createContext, useContext, useState } from "react";

const PanelContext = createContext()

export const PanelProvider = ( {children} ) => {
    const [deploy, setDeploy] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)


    const togglePanel = () => {
        setDeploy(!deploy)
    }

const togglePanelTimed = () => {
  setIsAnimating(true)        
  setTimeout(() => {
    setIsAnimating(false)     
    setDeploy(false)          
  }, 300) 
}

    const values = {
        deploy,
        isAnimating,
        togglePanel,
        togglePanelTimed
    }

return (
    <PanelContext.Provider value={values}> 
    {children}
    </PanelContext.Provider>
)}

export const usePanel = () => useContext(PanelContext)








