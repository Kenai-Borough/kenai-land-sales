import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export default function PageTransition({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
