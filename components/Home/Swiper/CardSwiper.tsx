import Image from 'next/image'
import React from 'react'

interface parameter {
    img: string,
    titel: string,
    discription: string
}

export default function CardSwiper({ img, titel, discription }: parameter) {
    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <Image src={img} alt={titel} className="w-full h-56 object-cover rounded-lg transition-transform transform hover:scale-110 duration-300" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">{titel}</h3>
            <p className="text-gray-600 text-sm mt-2">{discription}</p>
        </div>
    )
}
