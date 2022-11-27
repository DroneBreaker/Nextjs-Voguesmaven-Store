import Link from 'next/link'
import React from 'react'

interface NavProps {
    name: string
    route: string
}

const navItems: Array<NavProps> = [
    {name: 'Home', route: '/'},
    {name: 'Shop', route: '/shop'},
    {name: 'About', route: '/about'},
    {name: 'Contact', route: '/contact'},
]

export default function Navbar() {
  return (
    <div className='bg-white border-b-2 shadow-2xl shadow-neutral-400'>
        <nav className='md:mx-24 md:flex'>
            <img alt='VM' className='text-left m-1 md:h-9 h-12 md:w-9 w-12 mx-8 rounded-full' src='/voguesmaven.jpg'/>
            
            <ul className='m-2' key={'item'}>
                {navItems.map((item, key) => (
                    <Link key={key} className='mx-6 font-semibold text-xs uppercase' href={item.route}>
                        {item.name}
                    </Link>
                ))}
            </ul>
        </nav>
    </div>
  )
}
