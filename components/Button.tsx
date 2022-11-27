// 'use client';
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
// import { AppRoutes } from '../Constants.tsx'

interface ButtonProps {
    text: string
    route: string
}

export default function Button({text, route}: ButtonProps) {
  return (
    <motion.div whileHover={{scale: 1.1, marginLeft: 15}} initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.9}}>
        <button className='md:mx-24 mx-10 md:mt-4 mt-2 bg-yellow-500 text-white p-2 px-4 rounded-md uppercase text-xs font-semibold'>
            <Link href={route}>
                {text}
            </Link>
        </button>
    </motion.div>
  )
}
