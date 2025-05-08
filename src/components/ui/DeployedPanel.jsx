import { PanelLeftClose } from 'lucide-react'
import { usePanel } from '../../context/PanelContext'

const DeployedPanel = () => {
    const { togglePanel } = usePanel()
    return (
        <section 
        className="h-full top-0 left-0 absolute w-[65vw] flex flex-col justify-center font-h1 text-xl
        text-black gap-4 px-1 z-50 
        dark:bg-[linear-gradient(to_top_right,#A7CCED,#86b8c3,#545E75)]
        bg-[linear-gradient(to_top_right,#545E75,#A7CCED,#86b8c3)]">
            <button onClick={togglePanel} className="absolute top-1 right-1">
            <PanelLeftClose size={30}/>
            </button>
            <div>
                Trabaja conmigo
            </div>
            <div>
                Mis trabajos
            </div>
            <div>
                Blog
            </div>
            <div>
                Mis redes
            </div>
        </section>
    )
}

export default DeployedPanel