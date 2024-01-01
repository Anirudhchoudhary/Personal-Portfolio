"use client";

import React from 'react'
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    className?: string;
    text: string;
    icon?: IconType;
    onSubmit?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    className,
    text,
    icon: Icon,
    onSubmit,
}) => {
  return (
    <div
        onClick={onSubmit}
        className={
            twMerge(
            `p-5
            hover:cursor-pointer
            border-2
            rounded-md
            border-slate-600
            w-[100 %]
            font-extrabold
            text-xl
            flex
            items-center
        `,
        className  
    )}>
        {text} {Icon ? <Icon size={20} className='ml-4' />: ""}
    </div>
  )
}

export default Button;