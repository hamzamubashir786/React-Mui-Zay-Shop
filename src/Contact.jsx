import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import Contant_form from './Contact_form'
import { Box } from '@mui/material';

const Contact = () => {
  return (
    <>

      <Navbar />

      <Box component="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861706.0013660975!2d59.39373845491559!3d32.47164679714393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f19682f21b890c1%3A0xde38f6c2793d573c!2sSarbisheh%2C%20South%20Khorasan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1727392514384!5m2!1sen!2s" width="100%" height="450px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      <Contant_form />
      <Footer />


    </>
  )
}

export default Contact