import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footerimg from '../../assets/footerimg.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='grid grid-cols-4 gap-2 px-16 h-[100px] items-center justify-center font-body font-light text-[#3E3E3E] text-sm bg-white'>

                <div>ABOUT US</div>
                <div>SHIPPING & PAYMENTS</div>
                <div><Link to='/collection'>COLLECTION</Link></div>
                <div>CONTACTS</div>

            </div>

            <div className='footerImg'>
                <img src={footerimg}/>
            </div>
        </div>
    )
}

export default Footer