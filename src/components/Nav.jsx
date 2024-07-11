import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (

    <div className='grid grid-cols-5 gap-2 px-16 h-[80px] items-center justify-center font-[body] font-light text-[#3E3E3E] text-sm bg-white'>

      <div>ABOUT US</div>
      <div>SHIPPING & PAYMENTS</div>

      <div className='flex justify-center items-center'>
        <Link to='/'><img src={logo} alt="logo" className='h-[64px] object-cover'/></Link>
      </div>

      <div><Link to='/collection'>COLLECTION</Link></div>
      <div>CONTACTS</div>

    </div>
  )
}

export default Nav