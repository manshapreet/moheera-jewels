import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'


const Nav = () => {


  return (

    <div className='relative grid grid-cols-5 px-16 h-[80px] items-center justify-center font-body font-light text-[#3E3E3E] text-sm bg-white'>

      <div className=''>
        <Link to='/ourstory'>OUR STORY</Link>
      </div>

      <div>
        <Link to='/customengagementrings'>CUSTOM ENGAGEMENT RINGS</Link>
      </div>

      <div className='flex justify-center items-center'>
        <Link to='/'><img src={logo} alt="logo" className='h-[64px] object-contain' /></Link>
      </div>


      <div>
        <Link to='/collection'>COLLECTION</Link>
      </div>

      {/* <div className='absolute right-8'> */}
      <div className=''>
        <Link to='/bespokeprocess'>BOOK A DISCOVERY CALL</Link>
      </div>


    </div>
  )
}

export default Nav