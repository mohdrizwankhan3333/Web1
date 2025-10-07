// components/AnimatedSection.tsx
import { motion } from "framer-motion"

export function AnimatedSection({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}
