'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {

    const [isVisibal, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false);
        }
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='fixed bottom-4 animate-pulse right-4 z-50'>
            {isVisibal && (
                <button onClick={scrollToTop}
                    className='bg-orange-400 text-white rounded-full w-12 h-12 flex justify-center items-center focus:outline-none'>
                    <FaArrowUp />
                </button>
            )}
        </div>
    )
}
