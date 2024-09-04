import React, { useEffect } from 'react'
import Products from '../components/Collection/Products'

const Collection = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Products/>
    </div>
  )
}

export default Collection