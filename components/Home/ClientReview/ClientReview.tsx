import React from 'react'
import ClineReviewCard from './ClineReviewCard'

const ClientReview = () => {
    return (
        <section id='ClientReview' className='pb-16 pt-4 bg-gray-100'>
            <h1 className='text-center text-2xl text-blue-950 font-bold'>What Our Happy Client Says</h1>
            {/* Sub Heading */}
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, id! Consectetur tenetur debitis atque eveniet earum labore, sunt cupiditate at!</p>
            {/* grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>
                <ClineReviewCard img='/images/u1.jpg' name='Jmail Hosni' rating='4.7' />
                <ClineReviewCard img='/images/u2.jpg' name='Ali Mohammed' rating='5.2' />
                <ClineReviewCard img='/images/u3.jpg' name='Feras Loo' rating='4.2' />
                <ClineReviewCard img='/images/u4.jpg' name='Heema Yaseen' rating='3.5' />
            </div>
        </section>
    )
}

export default ClientReview