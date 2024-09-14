import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import icon from '../../assets/carticon.png'
import { useShoppingCart } from '../../context/ShoppingCartContext'


const Nav = () => {

  const { cartQuantity } = useShoppingCart();

  return (

    <div className='relative flex gap-2 px-16 h-[80px] items-center justify-center font-body font-light text-[#3E3E3E] text-sm bg-white'>

      <div className='flex justify-center items-center'>
        <Link to='/'><img src={logo} alt="logo" className='h-[64px] object-contain' /></Link>
      </div>

      {/* <div className='absolute right-8'>
        <Link to='bespokeprocess'>BOOK A DISCOVERY CALL</Link>
      </div> */}

      <div className='px-8 absolute right-0'>
        <Link to='/cart'>
          <img src={icon} className='h-8 object-contain w-full' />
        </Link>

        <div className='absolute bottom-[-10px] right-[20px] rounded-xl bg-[var(--secondary)] text-white custom-shadow h-6 w-6 flex items-center justify-center'>{cartQuantity}</div>
      </div>

      {/* <div>
        <Link to='/collection'>COLLECTION</Link>
      </div> */}

    </div>
  )
}

export default Nav