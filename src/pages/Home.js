import React from 'react'
import Main from '../components/Home/Main'
import About from '../components/Home/About/About'
import ProductDisplay from '../components/Home/ProductDisplay/ProductDisplay'
import BoxEngagement from '../components/Home/BoxEngagement/BoxEngagement'
import LoveLetters from '../components/Home/LoveLetters/LoveLetters'
import Contact from '../components/Home/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Main/>
      <About/>
      <ProductDisplay/>
      <BoxEngagement/>
      <LoveLetters/>
      <Contact/>
    </div>
  )
}

export default Home