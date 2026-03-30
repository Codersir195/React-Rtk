import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import Product from './Product.jsx'

function Home() {
  return (
    <div>
      <Header />
      <Product/>
      <Card />
      <Footer />
    </div>
  )
}

export default Home
