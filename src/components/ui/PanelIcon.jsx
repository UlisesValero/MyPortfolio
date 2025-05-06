import { Menu } from 'lucide-react'
import { usePanel } from '../../context/PanelContext'
import DeployedPanel from './DeployedPanel'

const PanelIcon = () => {
    const { togglePanel, deploy } = usePanel()

    return (
        <div className='mt-1'>
            <button onClick={togglePanel} >
                <Menu color='white' size={28} />
            </button>
            {deploy && (
                <>
                    <div
                        className="fixed inset-0 bg-dgray/50 dark:bg-black/50 backdrop-blur-sm z-10 "
                        onClick={togglePanel}
                    />
                    <DeployedPanel />
                </>

            )}
        </div>

    )
}


export default PanelIcon