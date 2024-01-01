"use client";

import React, { useMemo } from 'react'
import Card from '../Card';

function Project() {
    const ProjectInfo = useMemo(() => [
        {
            title: "Spotify Clone",
            description: `Tech Used: NextJs, Tailwind, Vercel, Zustand and Supabase`,
            src: "/images/spotifyclone.png",
            alt: "Spotify Clone desktop view",
            href: "https://spotify-clone-ashy-seven.vercel.app/"
        },
        {
            title: "Mother Help ",
            description: "Tech Used: ReactJs, Django, DRF, JWT, AWS and S3",
            src: "/images/motherhelp.png",
            alt: "Mother Help Desktop View",
            href: "https://motherhelp-app-frontend.vercel.app/"
        },
        {
            title: "Ecommerce Website",
            description: "Tech Used: Mongo DB, Express, ReactJS and NodeJS",
            src: "/images/ecommerce.png",
            alt: "Ecommerce Website To",
            href: "https://www.ketnipz.com/"
        },

    ], [])
    return (
        <div className='flex flex-row flex-wrap gap-1'>
            {ProjectInfo.map((item) => (
                <Card
                    key={item.title}
                    href={item.href}
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    )
}

export default Project