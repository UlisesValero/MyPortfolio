import { useState } from 'react'
import { Menu } from 'lucide-react'
import DeployedPanel from './DeployedPanel'

const Panel = () => {
    const [deploy, setDeployed] = useState(false)

    const togglePanel = () => {
        setDeployed(!deploy)
        console.log("clickeado")
    }

    return (
        <div>
            <button onClick={togglePanel} >
                <Menu />
            </button>
            {deploy && (
                <div>
                    <DeployedPanel />
                </div>
            )}
        </div>

    )
}


export default Panel