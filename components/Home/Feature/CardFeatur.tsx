import React from 'react'
import { IconType } from 'react-icons'

interface CardFeaturProps {
    title: string
    disc: string
    Icon: IconType // React-icons type for icon components
}

export default function CardFeatur({ title, disc, Icon }: CardFeaturProps) {
    return (
        <div data-aos='fade-right' data-aos-anchor-placement='top-center'
            className='bg-white p-4 rounded-lg'>
            <div className='flex items-center space-x-3'>
                <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                    <Icon className='w-6 h-6 text-orange-400' />
                </div>
                <h1 className='text-lg font-bold text-gray-700'>{title}</h1>
            </div>
            <p className='my-3 text-gray-700 leading-relaxed'>{disc}</p>
        </div>
    )
}
