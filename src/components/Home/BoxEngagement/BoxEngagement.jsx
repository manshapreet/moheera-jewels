import React from 'react'
import './BoxEngagement.css'
import { Link } from 'react-router-dom'

const BoxEngagement = () => {
    return (
        <div className='BoxEngagement'>
            <div className='font-subheading text-4xl'>
                Begin your own custom design journey today by using our Engagement Ring Builder.
            </div>
            <Link to='/customengagementrings'>
                <button className='text-xs font-bold py-3 px-6 border-2 border-[var(--primary)] bg-[var(--primary)] text-white'>
                    CUSTOM ENGAGEMENT RINGS
                </button>
            </Link>
        </div>
    )
}

export default BoxEngagement