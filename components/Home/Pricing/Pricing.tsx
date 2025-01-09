'use client'
import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
    return (
        <section id='Pricing' className='py-16 bg-gray-100'>
            <div>
                <h1 className='text-center text-2xl text-blue-950 font-bold'>Choose The Plan That's Right For You</h1>
                <p className='mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in maxime tempora cumque</p>
                <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
                    {/* Price card */}
                    <PriceCard time='3 Month' price='19.99' />
                    <PriceCard time='12 Month' price='20.5' />
                    <PriceCard time='Life Time' price='15.85' />
                </div>
            </div>
        </section>
    )
}

export default Pricing