import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import icon from '../../assets/navicon.png'
import cross from '../../assets/crossicon.png'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'


const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>

      <div className='relative flex grid grid-cols-3 items-center px-16 h-[80px] items-center justify-center font-body font-light text-[#3E3E3E] text-sm bg-white z-2 font-body'>

        <div className=''>
          {isNavOpen ?
            <img src={cross} className='w-6 max-w-[100%] cursor-pointer' onClick={() => setIsNavOpen(false)} />
            : <img src={icon} className='h-6 max-h-[100%] cursor-pointer' onClick={() => setIsNavOpen(true)} />
            }
        </div>

        <div className='flex justify-center items-center'>
          <Link to='/'><img src={logo} alt="logo" className='h-[64px] object-contain' /></Link>
        </div>

        <div className='flex justify-end'>
          <Link to='/bespokeprocess'>BOOK A DISCOVERY CALL</Link>
        </div>

      </div>


      <div className={isNavOpen? 'bg-white absolute top-[80px] left-0 right-0 py-6 px-16 flex flex-col items-start z-3 navAnim active custom-shadow font-body': 'bg-white absolute top-[80px] left-0 right-0 py-0 px-16 flex flex-col items-start z-1 navAnim font-body'}>
        <div>
          <Link to='/ourstory'>OUR STORY</Link>
        </div>

        <div>
          <Link to='/customengagementrings'>CUSTOM ENGAGEMENT RINGS</Link>
        </div>

        <div>
          <Link to='/collection'>COLLECTION</Link>
        </div>

        <div>
          <Link to='/bespokeprocess'>BESPOKE PROCESS</Link>
        </div>
      </div>

    </>
  )
}

export default Nav