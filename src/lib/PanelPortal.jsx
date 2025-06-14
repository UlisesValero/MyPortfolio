import { createPortal } from "react-dom"


const portalRoot = document.getElementById('portal-root')

const PanelPortal = ({ children }) => {
  return createPortal(children, portalRoot)
};

export default PanelPortal
