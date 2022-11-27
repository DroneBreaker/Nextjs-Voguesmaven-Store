'use client';

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <div>
            <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className='bg-neutral-300 md:h-52 p-6'>
                <h1 className='md:mx-24 mx-8 text-4xl font-bold'>Welcome to <span className='text-yellow-500 animate-pulse italic'>VoguesMaven.</span></h1>

                <h2 className='md:mx-24 mx-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa dolorum molestiae reiciendis, dignissimos dolores esse? Dolorum hic accusamus minima placeat vitae ut ab, eaque cum optio error quo distinctio!</h2>
            </motion.div>

            <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1.6}} className='grid grid-cols-2 md:h-52'>
                <div>
                    {/* founder's photo */}
                </div>

                <div className='bg-yellow-500'>
                    <p className='md:p-12 p-8 md:mx-12 text-sm md:w-[24rem] w-[12.5rem]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Harum omnis, neque illum ab atque vero fugit quasi, 
                        repellat sit voluptate repellendus doloribus eum tenetur eveniet 
                        dolorem placeat suscipit. Iste, suscipit.
                    </p>
                </div>
            </motion.div>


            <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} className='p-4'>
                <h1 className='md:mx-24 mx-8 text-4xl font-semibold'>Damn, Goodbye!</h1>
            </motion.div>
        </div>
    )
}
