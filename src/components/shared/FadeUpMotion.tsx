'use client'

//@ Modules
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay?: number
  x?: number
  y?: number
  className?: string
  isFirstScreen?: boolean
}

const FadeUpMotion: React.FC<Props> = ({
  children,
  delay = 0,
  x,
  y,
  className,
  isFirstScreen = false,
}) => {
  const initial = {
    opacity: 0,
    ...(x !== undefined ? { x } : {}),
    ...(y !== undefined ? { y } : {}),
  }

  const target = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      animate={isFirstScreen ? target : undefined}
      whileInView={!isFirstScreen ? target : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeUpMotion
