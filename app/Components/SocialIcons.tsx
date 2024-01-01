"use client"

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion'
import React from 'react'
import Link from "next/link";

function SocialIcons() {
    const socialIcon = [
        {
            key: 1,
            ele: <FaLinkedin size={40} />,
            href: "https://www.linkedin.com/in/anirudh--malik/"
        },
        {
            key: 2,
            ele: <FaGithub size={40} />,
            href: "https://github.com/Anirudhchoudhary"
        },
        {
            key: 3,
            ele: <FaSquareXTwitter size={40} />,
            href: "https://twitter.com/Anirudh09876543"
        },
        {
            key: 4,
            ele: <SiLeetcode size={40} />,
            href: "https://leetcode.com/anirudhchoudary007/"
        }
    ]
    return (
        <div className='flex justify-around w-[50%] max-md:w-full items-center gap-4 my-4'>
            {socialIcon.map((item) => (
                <Link href={item.href} target="_blank" key={item.key}>
                    <motion.div
                        whileHover={{scale: [null, 1.5, 1.4]}}
                    >
                        {item.ele}
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}

export default SocialIcons