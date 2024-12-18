import { Grid2, Box, Typography } from "@mui/material"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Footer = ({ }) => {
  return (


    <>

      <Grid2 sx={{ backgroundColor: "#212934", display: "flex", justifyContent: "center", gap: "10px", py: "20px", flexWrap: "wrap" }}>


        <Box sx={{ width: { xs: "100%", md: "30%" }, padding: "10px 30px" }}>
          <Typography sx={{ color: "#59AB6A", fontWeight: "700", fontSize: "30px", pb: "10px", my: "20px", borderBottom: "2px solid #2d3642" }}>Zay Shop</Typography>
          <Typography sx={{ color: "#CFD6E1", display: "flex", columnGap: "18px", fontSize: "18px", my: "8px", alignItems: "center", justifyContent: "start" }} >
            <IoLocationSharp />
            123 Consectetur at ligula 10660
          </Typography>
          <Typography sx={{ color: "#CFD6E1", display: "flex", columnGap: "18px", fontSize: "18px", my: "8px" }} >
            <FaPhone />
            010-020-0340
          </Typography>
          <Typography sx={{ color: "#CFD6E1", display: "flex", columnGap: "18px", fontSize: "18px", my: "8px" }} >
            <MdEmail />
            info@company.com
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" }, padding: "10px 30px" }}>
          <Typography sx={{ color: "#59AB6A", fontWeight: "700", fontSize: "30px", pb: "10px", my: "20px", borderBottom: "2px solid #2d3642" }}>Products</Typography>

          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} >Luxury </Typography>
          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} >Sport Wear </Typography>
          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} > Men's Shoes </Typography>
          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} >Women's Shoes </Typography>
          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} >Popular Dress </Typography>
          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} >Gym Accessories </Typography>
          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} >Sport Shoes </Typography>
          <Typography sx={{ color: "#CFD6E1", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} > </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" }, padding: "10px 30px" }}>
          <Typography sx={{ color: "#59AB6A", fontWeight: "700", fontSize: "30px", pb: "10px", my: "20px", borderBottom: "2px solid #2d3642" }}>Further Info
          </Typography>

          <Typography sx={{ fontSize: "17px", my: "10px", cursor: "pointer", }} ><Link style={{ color: "white", textDecoration: "none", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.color = "#59AB6E")} onMouseLeave={(e) => (e.target.style.color = "white")} to={"/"}>Home</Link></Typography>
          <Typography sx={{ fontSize: "17px", my: "10px", cursor: "pointer", }} ><Link style={{ color: "white", textDecoration: "none", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.color = "#59AB6E")} onMouseLeave={(e) => (e.target.style.color = "white")} to={"/about"}>About Us</Link></Typography>
          <Typography sx={{ fontSize: "17px", my: "10px", cursor: "pointer", }} ><Link style={{ color: "white", textDecoration: "none", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.color = "#59AB6E")} onMouseLeave={(e) => (e.target.style.color = "white")} to={"/shop"}>Shop Locations</Link></Typography>
          <Typography sx={{ fontSize: "17px", my: "10px", cursor: "pointer", }} ><Link style={{ color: "white", textDecoration: "none", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.color = "#59AB6E")} onMouseLeave={(e) => (e.target.style.color = "white")} to={"/contact"}>Contact</Link></Typography>
          <Typography sx={{ color: "white", fontSize: "17px", my: "10px", cursor: "pointer", transition: "300ms", "&:hover": { color: "#59AB6E" } }} >FAQs</Typography>
        </Box>


      </Grid2 >
      <Box sx={{ backgroundColor: "#212934", px: { md: "8vw", xs: "3px" },  py: "20px" }}>


        <Box sx={{ borderTop: "1px solid #2d3642", width: { md: "90%", xs: "100%" },display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <Box sx={{ py: "30px", display: "flex", gap: "20px", margin:{xs:"auto" , lg:"0px"} }}>

            <FaFacebookF style={{ borderRadius: "50%", backgroundColor: "#2C333E", transition: "400ms", cursor: "pointer", border: "2px solid #2d3642", fontSize: "45px", padding: "10px", color: "white" }} onMouseEnter={(e) => (e.target.style.color = "#212934", e.target.style.backgroundColor = "white")} onMouseOut={(e) => (e.target.style.color = "white", e.target.style.backgroundColor = "#212934")} />
            <FaInstagram style={{ borderRadius: "50%", backgroundColor: "#2C333E", transition: "400ms", cursor: "pointer", border: "2px solid #2d3642", fontSize: "45px", padding: "10px", color: "white" }} onMouseEnter={(e) => (e.target.style.color = "#212934", e.target.style.backgroundColor = "white")} onMouseOut={(e) => (e.target.style.color = "white", e.target.style.backgroundColor = "#212934")} />
            <FaTwitter style={{ borderRadius: "50%", backgroundColor: "#2C333E", transition: "400ms", cursor: "pointer", border: "2px solid #2d3642", fontSize: "45px", padding: "10px", color: "white" }} onMouseEnter={(e) => (e.target.style.color = "#212934", e.target.style.backgroundColor = "white")} onMouseOut={(e) => (e.target.style.color = "white", e.target.style.backgroundColor = "#212934")} />
            <FaLinkedin style={{ borderRadius: "50%", backgroundColor: "#2C333E", transition: "400ms", cursor: "pointer", border: "2px solid #2d3642", fontSize: "45px", padding: "10px", color: "white" }} onMouseEnter={(e) => (e.target.style.color = "#212934", e.target.style.backgroundColor = "white")} onMouseOut={(e) => (e.target.style.color = "white", e.target.style.backgroundColor = "#212934")} />

          </Box>

          <Box sx={{ width: "310px", height: "50px  ", display: "flex", justifyContent: "center", flexWrap: "wrap", color: "white" }}>
            <TextField fullWidth label="Email Address" style={{ width: "200px", color: "white", border: "1px solid #2d3642", outline: "none" }} id="fullWidth" />
            <Button sx={{ padding: "0px 10px", height: "100%", backgroundColor: "#59AB6E", color: "white" }}>Subscribe</Button>
          </Box>

        </Box>
      </Box>

    </>

  )
}

export default Footer;