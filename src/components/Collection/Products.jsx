import React from 'react'
import Product from './Product'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'


const menuList = [
    {
        id: 1,
        name: "Earring",
        category : "Ear",
        description: "",
        price: 5.99,
        image: product1
    },
    {
        id: 2,
        name: "Anklet",
        category : "Feet",
        description: "",
        price: 3.99,
        image: product2
    },
  
    {
        id: 3,
        name: "Bracelet",
        category: "Hand",
        description: "",
        price: 12.99,
        image: product3
    },
    {
        id: 4,
        name: "Necklace",
        category: "Neck",
        description: "",
        price: 10.99,
        image: product4
    },
  ]

const Products = () => {
  return (
    <div className='p-16 menu'>

        <div className='font-subheading text-3xl mb-8'>Our Collection</div>

        <div className='flex flex-wrap gap-8 justify-center'>

            {menuList.map((item, i) => 
                    <Product item={item} key={i}/>
            )}

        </div>
    </div>
  )
}

export default Products