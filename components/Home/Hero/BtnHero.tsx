import React from 'react'

const BtnHero = ({ text, className }: { text: string, className: string }) => {
    return (
        <a href="#_" className={`box-border ${className} inline-flex items-center justify-center w-auto px-10 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease-linear`}>
            {text}
        </a>
    )
}

export default BtnHero