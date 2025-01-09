import React from 'react'

export default function BoxText({ txt }: { txt: string }) {
    return (
        <h1 className='border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967] font-bold'>{txt}</h1>
    )
}
