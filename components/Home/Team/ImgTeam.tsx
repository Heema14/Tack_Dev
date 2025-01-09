'use client'
import Image from 'next/image'
import React from 'react'

export default function ImgTeam({ title, hint, img, className }: { title: string, hint: string, img: string, className: string }) {
    return (
        <div data-aos='fade-right' data-aos-anchor-placement='top-center'
            className='ImgCard relative duration-200 overflow-hidden w-[80%] mx-auto sm:mx-0 sm:w-full'>
            <Image src={img} alt='Team' width={300} height={300} className='duration-200 rounded-lg w-full sm:w-auto' />
            <div className={`ImgTeam absolute w-full h-[3.5em] duration-200 bottom-0 p-4 ${className} rounded-lg`}>
                <p className='text-lg text-white font-bold'>{title}</p>
                <p className='text-gray-200'>({hint})</p>
            </div>
        </div>
    )
}
