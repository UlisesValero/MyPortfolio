import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AnimationForPages =  ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, amount: 0.3})
    
    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={ isInView ? { opacity: 1, y: 0} : {} }
        transition={{ duration: 0.8, ease: 'easeIn' }}
        >
            {children}
        </motion.div>
    )
}

export default AnimationForPages