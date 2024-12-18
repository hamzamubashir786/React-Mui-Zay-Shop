import Footer from "./Footer"
import Home_card1 from "./Home_card1"
import Home_card2 from "./Home_card2"
import Home_Slider from "./Home_Slider"
import Navbar from "./Navbar"
import React from 'react'



const Home = () => {
  return (
    <>
        <Navbar />
        <Home_Slider />
        <Home_card1 />
        <Home_card2 />
        <Footer />
    </>
  )
}

export default Home