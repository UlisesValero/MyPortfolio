import { CgMenuRightAlt } from "react-icons/cg"
import { usePanel } from '../../context/PanelContext'
import DeployedPanel from './DeployedPanel'
import { motion, AnimatePresence } from 'framer-motion'
import PanelPortal from '../../lib/PanelPortal'


const PanelIcon = () => {
    const { togglePanel, deploy } = usePanel()

    return (
 <div className="mt-1">
            <button onClick={togglePanel}>
                <CgMenuRightAlt size={28} className="md:hidden dark:text-white" />
            </button>

            <AnimatePresence>
                {deploy && (
                    <PanelPortal>
                        <>
                            <motion.div
                                className="fixed inset-0 bg-dgray/50 dark:bg-black/50 backdrop-blur-sm z-[300]"
                                onClick={togglePanel}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <DeployedPanel />
                        </>
                    </PanelPortal>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PanelIcon;
