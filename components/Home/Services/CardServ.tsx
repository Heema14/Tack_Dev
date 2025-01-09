import React from 'react'
import { IconType } from 'react-icons'

interface Parameter {
    txt: string,
    Icon: IconType
}

export default function CardServ({ txt, Icon }: Parameter) {
    return (
        <div data-aos='fade-right' data-aos-anchor-placement='top-center'
            className='flex items-center space-x-5'>
            {/* icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                <Icon className='w-6 h-6 text-orange-400' />
            </div>
            {/* content */}
            <div>
                <p className='text-base font-bold text-gray-700'>{txt}</p>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    )
}
