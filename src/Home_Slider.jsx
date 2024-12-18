import Carousel from 'react-bootstrap/Carousel';
import { Box, Grid2, Typography } from "@mui/material"
import img1 from "./assets/banner_img_01.jpg"
import img2 from "./assets/banner_img_02.jpg"
import img3 from "./assets/banner_img_03.jpg"

function Home_Slider() {
    return (
        <Carousel>
            <Carousel.Item >
                <Grid2 sx={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: { xs: "column-reverse", md: "row" }, backgroundColor: "#EFEFEF", justifyContent: "center", gap: "30px" }}>
                    <Box sx={{ width: { xs: "100%", md: "45%" }, height: { xs: "max-conten", md: "97vh" }, display: "flex", alignItems: "center", px: "4vw" }}>


                        <Box>

                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ color: "#59AB6E", fontWeight: "bold", fontSize: "34px" }}>Zay</Typography>
                                &nbsp;
                                <Typography sx={{ color: "#59AB6E", fontWeight: "100", fontSize: "34px" }}>eCommerce</Typography>
                            </Box>
                            <Typography sx={{ fontSize: "27px" }}>Tiny and Perfect eCommerce Template </Typography>
                            <Typography sx={{ display: "flex", flexWrap: "wrap" }}>
                                Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories Unsplash ,  and Icons 8.
                            </Typography>

                        </Box>

                    </Box>
                    <Box sx={{ width: { xs: "100%", lg: "40%" }, display: "flex", alignItems: "center", height: { xs: "max-conten", md: "97vh" } }}>
                        <img style={{ width: "100%" }} src={img1} />
                    </Box>
                </Grid2>
            </Carousel.Item>
            <Carousel.Item >
                <Grid2 sx={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: { xs: "column-reverse", md: "row" }, backgroundColor: "#EFEFEF", justifyContent: "center", gap: "30px" }}>
                    <Box sx={{ width: { xs: "100%", md: "45%" }, height: { xs: "max-conten", md: "97vh" }, display: "flex", alignItems: "center", px: "4vw" }}>


                        <Box >

                            <Box sx={{ display: "flex" }}>

                                <Typography sx={{ color: "#59AB6E", fontWeight: "100", fontSize: "34px" }}>Proident occaecat</Typography>
                            </Box>
                            <Typography sx={{ fontSize: "27px" }}>Aliquip ex ea commodo consequat</Typography>
                            <Typography sx={{ display: "flex", flexWrap: "wrap" }}>
                                You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.
                            </Typography>

                        </Box>

                    </Box>
                    <Box sx={{ width: { xs: "100%", md: "40%" }, display: "flex", alignItems: "center", height: { xs: "max-conten", md: "97vh" } }}>
                        <img style={{ width: "100%" }} src={img2} />
                    </Box>
                </Grid2>
            </Carousel.Item>
            <Carousel.Item >
                <Grid2 sx={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: { xs: "column-reverse", md: "row" }, backgroundColor: "#EFEFEF", justifyContent: "center", gap: "30px" }}>
                    <Box sx={{ width: { xs: "100%", md: "45%" }, height: { xs: "max-conten", md: "97vh" }, display: "flex", alignItems: "center", px: "4vw" }}>


                        <Box >


                                <Typography sx={{ color: "#59AB6E", fontWeight: "100", fontSize: "34px" }}>Repr in voluptate</Typography>
                            <Typography sx={{ fontSize: "27px" }}>Ullamco laboris nisi ut</Typography>
                            <Typography sx={{ display: "flex", flexWrap: "wrap" }}>
                                We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                            </Typography>

                        </Box>

                    </Box>
                    <Box sx={{ width: { xs: "100%", md: "40%" }, display: "flex", alignItems: "center", height: { xs: "max-conten", md: "97vh" } }}>
                        <img style={{ width: "100%" }} src={img3} />
                    </Box>
                </Grid2>
            </Carousel.Item>
            {/* <Carousel.Item>

            </Carousel.Item>
            <Carousel.Item>


            </Carousel.Item> */}
        </Carousel>
    );
}

export default Home_Slider;