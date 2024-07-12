import React from 'react'
import Product from './Product'
import product1 from '../../assets/product1.png'


const menuList = [
    {
        id: 1,
        name: "Earring",
        category : "Ear",
        description: "Crispy rolls stuffed with fresh vegetables",
        price: 5.99,
        image: "../../assets/product1.png"
    },
    {
        id: 2,
        name: "Anklet",
        category : "Feet",
        description: "Toasted bread with garlic and butter",
        price: 3.99,
        image: "../../assets/product2.png"
    },
  
    {
        id: 3,
        name: "Bracelet",
        category: "Hand",
        description: "Succulent grilled chicken served with vegetables",
        price: 12.99,
        image: "../../assets/product3.png"
    },
    {
        id: 4,
        name: "Necklace",
        category: "Neck",
        description: "Layers of pasta with vegetables and cheese",
        price: 10.99,
        image: "../../assets/product4.png"
    },
  ]

const Products = () => {
  return (
    <div className='Menu'>

        <div className=''>Our Menu</div>

        <div className=''>
        
            <div className='menuCategory'>

            {menuList.map((item, i) => 
                    <Product item={item} key={i}/>
                )}
            </div>
            <img src={menuList[0].image} alt="" />
        </div>
    </div>
  )
}

export default Products