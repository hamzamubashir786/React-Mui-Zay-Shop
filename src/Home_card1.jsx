import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "./assets/category_img_01.jpg"
import img2 from "./assets/category_img_02.jpg"
import img3 from "./assets/category_img_03.jpg"
import { Grid2, Box, Typography } from '@mui/material'

function Home_card1() {
    return (
        <>
            <Grid2 sx={{ my: "40px" }}>
                <Box>
                    <Typography sx={{ width: "100%", fontWeight: "100", px: "2vw", textAlign: "center", fontSize: "40px" }}>Categories of The Month</Typography>
                    <Typography sx={{ width: { xs: "100%", md: "600px", margin: "auto", textAlign: "center", fontSize: "16px" } }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Box>
            </Grid2>


            <Grid2 sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-around", gap:"30px"}}>
                <Box >


                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Box sx={{ width: "100%", overflow: "hidden", borderRadius: "50%" }}>

                            <Card.Img variant="top" src={img1} />
                        </Box>
                        <Card.Body>
                            <Card.Text>   Watches   </Card.Text>
                            <Button style={{ backgroundColor: "#59AB6E", border: "none" }}>Go Shop</Button>
                        </Card.Body>
                    </Card>
                </Box>
                <Box >


                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Box sx={{ width: "100%", overflow: "hidden", borderRadius: "50%" }}>

                            <Card.Img variant="top" src={img2} />
                        </Box>
                        <Card.Body>
                            <Card.Text>   Watches   </Card.Text>
                            <Button style={{ backgroundColor: "#59AB6E", border: "none" }}>Go Shop</Button>
                        </Card.Body>
                    </Card>
                </Box>
                <Box >


                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Box sx={{ width: "100%", overflow: "hidden", borderRadius: "50%" }}>

                            <Card.Img variant="top" src={img3} />
                        </Box>
                        <Card.Body>
                            <Card.Text>   Watches   </Card.Text>
                            <Button style={{ backgroundColor: "#59AB6E", border: "none" }}>Go Shop</Button>
                        </Card.Body>
                    </Card>
                </Box>
            </Grid2>
        </>
    );
}

export default Home_card1;