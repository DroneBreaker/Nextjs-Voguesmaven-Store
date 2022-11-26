import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    img: string
    categoryText: string
    route: string
}

const cardItems: Array<CardProps> = [
    {img: '/try.jpg', categoryText: "Women's", route: '/shop/womens'},
    {img: '/try.jpg', categoryText: "Accessories", route: '/shop/accessories'},
    {img: '/try.jpg', categoryText: "Men's", route: '/shop/mens'},
]

export default function Card() {
  return (
    <motion.div initial={{opacity: 0 ,scale: 0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 2}} className='grid md:grid-cols-3 grid-cols-2 gap-3'>
        {cardItems.map((item) => (
            <div className='relative max-w-sm text-sm'>
                <img className='h-[10rem] w-[10.5rem] bg-cover' src={item.img}/>

                <button>
                    <Link href={item.route} style={{top: '40%', left: '13%'}} className='bg-white text-xs font-bold absolute uppercase p-2 px-4'>
                        {item.categoryText}
                    </Link>
                </button>
            </div>
        ))}
    </motion.div>
  )
}
