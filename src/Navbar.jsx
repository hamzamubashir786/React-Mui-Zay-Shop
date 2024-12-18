import React from 'react'
import { AppBar, Grid2, Box, Typography } from '@mui/material'
import { Link } from "react-router-dom"
import { MdSearch } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import "./App.css"


const Navbar = () => {
    return (
        <>


            <Grid2 sx={{ width: "100%", height: "100px", justifyContent: "space-between", px: "4vw", backgroundColor: "white", alignItems: "center", boxShadow: "0px 0px 10px 2px #ccc", display: "flex" }}>

                <Box >
                    <Typography>
                        <Link style={{ fontSize: "40px", fontWeight: "bold", textDecoration: "none", color: "#59AB6E" }} to={"/"}>Zay</Link>
                    </Typography>

                </Box>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "80px" }}>
                    <Typography> <Link style={{ textDecoration: "none", color: "black", fontWeight: '100', }} to={"/"}>Home</Link> </Typography>
                    <Typography> <Link style={{ textDecoration: "none", color: "black", fontWeight: '100', }} to={"/about"}>About</Link> </Typography>
                    <Typography> <Link style={{ textDecoration: "none", color: "black", fontWeight: '100', }} to={"/shop"}>Shop</Link> </Typography>
                    <Typography> <Link style={{ textDecoration: "none", color: "black", fontWeight: '100', }} to={"/contact"}>Contact</Link> </Typography>
                </Box>

                <Box sx={{ display: { xs: "none", md: "flex" }, fontSize: "23px", gap: "20px" }}>

                    <MdSearch />
                    <FaUserAlt />
                    <IoMdCart />
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <FaBars />
                </Box>

            </Grid2>


        </>
    )
}

export default Navbar