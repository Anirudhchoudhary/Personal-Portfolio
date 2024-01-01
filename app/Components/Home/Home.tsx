"use client"

import Image from 'next/image'
import { FaCoffee } from 'react-icons/fa'
import SocialIcons from '../SocialIcons'
import Button from '../Button'


export default function HomeMe() {

    const BuyMeCoffe = () => {
        window.open("https://www.buymeacoffee.com/anirudh0601")
    }

    return (
        <div className='flex flex-col gap-4 items-center justify-center mt-10'>
            <div
                className="
          border-black
          border-dotted
          text-center
          rounded-full
          max-md:w-full
          h-auto
          md:w-100
          md:h-100
          overflow-hidden 
          object-contain
        ">
                <Image
                    className=''
                    src="/images/profile.png"
                    alt={'Profile Image of Anirudh Malik'}
                    width={600}
                    height={600}
                    layout='responsive'
                    objectFit='contain' />
            </div>
            <SocialIcons />
            <div className='w-[70%] text-center md:w-[30%] hover:cursor-pointer flex gap-2 flex-wrap md:flex-nowrap'>
                <Button
                    text={`Hi! I am Anirudh Malik`}
                    className='bg-slate-200 md:w-1/2 mx-auto'
                />
                <Button
                    onSubmit={BuyMeCoffe}
                    text={`By Me a Coffe`}
                    icon={FaCoffee}
                    className='bg-slate-200 md:w-1/2 mx-auto'
                />
            </div>
        </div>
    )
}
