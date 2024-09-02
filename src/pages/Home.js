import React from 'react'
import Main from '../components/Home/Main'
import About from '../components/Home/About/About'
import ProductDisplay from '../components/Home/ProductDisplay/ProductDisplay'

const Home = () => {
  return (
    <div>
      <Main/>
      <About/>
      <ProductDisplay/>
    </div>
  )
}

export default Home