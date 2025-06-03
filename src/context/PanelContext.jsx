import { createContext, useContext, useState, useEffect } from "react";

const PanelContext = createContext()

export const PanelProvider = ( {children} ) => {
    const [deploy, setDeploy] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (deploy) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [deploy]);


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








