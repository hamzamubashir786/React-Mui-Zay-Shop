import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Typography, Box, Grid2 } from '@mui/material';
import img1 from "./assets/brand_01.png"
import img2 from "./assets/brand_02.png"
import img3 from "./assets/brand_03.png"
import img4 from "./assets/brand_04.png"
import "./App.css"
function UncontrolledExample() {
    return (
        <Grid2 sx={{ backgroundColor: "#E9EEF5", py: "50px" }}>
            <Grid2 sx={{ width: '100%', backgroundColor: "#E9EEF5", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "34px", fontWeight: "100", color: "#7C8086" }} > Our Brands</Typography>
                <Typography sx={{ width: { xs: "100%", sm: "600px" }, textAlign: "center", px: "4vw", py: "10px", color: "#7C8086" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</Typography>

            </Grid2>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", my: "100px" }}>

                <Box sx={{ width: { xs: "100%", md: "850px" } }}>

                    <Carousel

                        indicators={false}>
                        <Carousel.Item>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap:{xs:"10px" , md:"80px"}, width: "100%", px:{xs:"20px" , md:"100px"} }}>


                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img1} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img2} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img3} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img4} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                            </Box>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap:{xs:"10px" , md:"80px"}, width: "100%", px:{xs:"20px" , md:"100px"} }}>


                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img1} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img2} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img3} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                                <Box sx={{width:{xs:"50px" , md:"100px"}}}>
                                    <Card.Img variant="top" src={img4} style={{ width: "100%", filter: "grayscale(100%)", transition: "300ms" }} onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")} onMouseOut={(e) => (e.target.style.filter = "grayscale(100%)")} />
                                </Box>
                            </Box>
                        </Carousel.Item>

                       
                    </Carousel>
                </Box>
            </Box>
        </Grid2>

    );
}

export default UncontrolledExample;