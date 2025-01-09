import React from 'react'
import BoxText from '../About/BoxText'
import ImgTeam from './ImgTeam'

const Team = () => {
    return (
        <section id='Team' className='py-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'>
                {/* text conyent */}
                <div className='lg:col-span-2'>
                    <BoxText txt='Our Team' />
                    <h1 className='mt-4 text-xl md:text-2xl font-bold text-gray-800'>Our Team of Exceptional Talent, Innovation, and Vision</h1>
                    <p className='mt-4 mb-6 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias facilis optio illum quod dicta cumque. Sunt amet cumque ut!</p>

                    <a href="#_" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Join Our Team</span></a>
                </div>

                {/* img */}
                <div className='sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3'>
                    <ImgTeam className='bg-orange-500' hint='Founder' title='Obito Uchiha' img='/images/t1.jpg' />
                    <ImgTeam className='bg-rose-500' hint='Co-Founder' title='Jessica Doas' img='/images/t2.jpg' />
                </div>
            </div>
        </section>
    )
}

export default Team