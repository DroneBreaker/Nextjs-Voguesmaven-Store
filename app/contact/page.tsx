'use client';
import React from 'react'
import Button from '../../components/Button'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
    <div className='bg-neutral-300 h-[100vh]'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className='md:mx-24 mx-12'>
                <div className='mt-12'>hhhhhhhh</div>
            </motion.div>

            <motion.div initial={{opacity: 0, scale: 0.2}} animate={{opacity: 1, scale: 1}} transition={{duration: 2.2}}>
                <div className='grid grid-cols-2 gap-2 mt-12 md:mx-0 mx-2'>
                    <input className='mt-4 px-2 rounded-md w-44' placeholder='First Name'/>
                    <input className='mt-4 px-2 rounded-md w-44'  placeholder='Last Name'/>
                    <input className='mt-4 px-2 rounded-md w-44'  placeholder='Email'/>
                    <input className='mt-4 px-2 rounded-md w-44'  placeholder='Topic'/>
                </div>

                <textarea className='mt-4 px-2 md:mx-0 mx-2 rounded-md md:w-[25.7rem] w-[22.6rem]' rows={7} cols={52} placeholder='Message'/>

                <Button text={'Submit'} route={'#'}/>
            </motion.div>
        </div>
    </div>
    )
}
