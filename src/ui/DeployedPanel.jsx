import "../App.css"
import { PanelLeftClose } from 'lucide-react'

const DeployedPanel = () => {
    return (
        <section className="h-full bg-amber-400 top-0 left-0 absolute">
            <div >
            <PanelLeftClose/>
            </div>
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