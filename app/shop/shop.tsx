'use client';
import React from 'react'
import { motion } from 'framer-motion'

export default function Shop() {
  return (
    <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}}>
        Shop
    </motion.div>
  )
}
