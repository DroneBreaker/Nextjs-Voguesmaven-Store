'use client';
import React from 'react'
import Button from '../../components/Button'
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Contact() {
    return (
    <div className='bg-neutral-300 h-[100vh]'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <motion.div initial={{opacity: 0, scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className='md:mx-24 mx-12'>
                <div className='mt-8 h-full'>
                    <Image alt='Hey' height={800} width={700} src='/contact.png'/>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0, scale: 0.2}} animate={{opacity: 1, scale: 1}} transition={{duration: 2.6}}>
                <div className='grid grid-cols-2 gap-2 mt-10 md:mx-0 mx-4'>
                    <input className='mt-4 px-2 rounded-md w-40' placeholder='First Name'/>
                    <input className='mt-4 px-2 rounded-md w-40'  placeholder='Last Name'/>
                    <input className='mt-4 px-2 rounded-md w-40'  placeholder='Email'/>
                    <input className='mt-4 px-2 rounded-md w-40'  placeholder='Topic'/>
                </div>

                <textarea className='mt-4 px-2 md:mx-0 mx-4 rounded-md md:w-[25.7rem] w-[21.1rem]' rows={7} cols={52} placeholder='Message'/>

                <Button text={'Submit'} route={'#'}/>
            </motion.div>
        </div>
    </div>
    )
}
