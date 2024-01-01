import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'


interface CardProps {
    src: string,
    alt: string,
    title: string,
    description: string,
    href: string,
}

const Card: React.FC<CardProps> = ({
    src,
    alt,
    title,
    description,
    href,
}) => {
  return (
    <div className='
        text-center
        border-2
        mx-auto
        w-full
        border-s-black-400
        md:w-[1/2]
        lg:w-[25%]
        '
    >
        <div className='mx-auto flex justify-center w-full h-[30vh]'>
            <Image
                src={src}
                alt={alt}
                width={300}
                height={300}
                objectFit='cover'
            />
        </div>
        <div className='mt-3'>
            <p className='font-bold text-2xl'> {title} </p>
            <p className='my-3'> {description}</p>
            <Link href={href} target='_blank'>
                <Button
                    className='w-full mx-auto font-bold border-gray-300'
                    text='Show Project'
                />
            </Link>
        </div>
    </div>
  )
}

export default Card