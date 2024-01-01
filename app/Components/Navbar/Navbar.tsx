"use client"

import React, { useMemo } from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { motion } from 'framer-motion';



const Navbar = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathname === '/',
            href: '/'

        },
        {
            label: 'About Me',
            active: pathname === '/about',
            href: '/about'
        },
        {   
            label: 'Projects',
            active: pathname === '/projects',
            href: '/projects'
        },
        {
            label: 'Hire Me',
            active: pathname === '/hire',
            href: '/hire'
        }
    ], [pathname])

    return (
        <div className='bg-navColor text-textColor py-5'>
            <div className='flex flex-col items-center justify-center gap-2 w-full'>
                <div>
                    <motion.div
                        className='font-extrabold text-5xl'
                        animate={{rotate: 360 }}
                        transition={{ ease: "easeInOut"}}
                    >
                        Web developer
                    </motion.div>
                    {/* <h2 className='font-extrabold text-5xl'>Web Developer</h2> */}
                </div>
                <div className='w-full md:w-[70%]'>
                    <nav>
                        <div className='gap-1 sm:gap-0 flex flex-row items-center justify-evenly my-4'>
                            {
                                routes.map((item) => (
                                    <Link href={item.href} key={item.label}>
                                        <div className=
                                            {`hover:cursor-pointer 
                                              font-semibold
                                              tracking-widest 
                                              ${item.active && 'border-b-2'}`}
                                        >
                                            {item.label}
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
    }

export default Navbar