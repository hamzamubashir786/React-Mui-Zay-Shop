import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img4 from "./assets/feature_prod_01.jpg"
import img5 from "./assets/feature_prod_02.jpg"
import img6 from "./assets/feature_prod_03.jpg"
import { FaStar } from "react-icons/fa";

import { Grid2, Box, Typography } from '@mui/material'

function Home_card1() {
    return (
        <Grid2 sx={{ backgroundColor: '#E9EEF5', mt: "40px", py: "20px" }}>
            <Grid2 sx={{ my: "40px" }}>
                <Box>
                    <Typography sx={{ width: "100%", fontWeight: "100", px: "2vw", textAlign: "center", fontSize: "40px" }}>Featured Product
                    </Typography>
                    <Typography sx={{ width: { xs: "100%", md: "600px", margin: "auto", textAlign: "center", fontSize: "16px" } }}>prehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Typography>
                </Box>
            </Grid2>


            <Grid2 sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "5vw", px: "3vw" }}>
                <Box sx={{ width: { xs: "80%", md: "27%" } }}>

                    <Card style={{ width: '100%', }}>
                        <Box sx={{ width: "100%" }}>

                            <Card.Img variant="top" style={{ width: "100%" }} src={img4} />
                        </Box>
                        <Card.Body>
                            <Card.Text style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                <Box >
                                    <FaStar style={{ color: "#EDE861" , fontSize:"20px"}} />
                                    <FaStar style={{ color: "#EDE861" , fontSize:"20px"}} />
                                    <FaStar style={{ color: "#EDE861" , fontSize:"20px"}} />
                                    <FaStar style={{ color: "#BCBCBC" , fontSize:"20px"}} />
                                    <FaStar style={{ color: "#BCBCBC" , fontSize:"20px"}} />
                                </Box>
                                <Typography color='#BCBCBC'> $240.00</Typography>

                            </Card.Text>
                            <Box>
                                <Typography sx={{ fontSize: "30px", fontWeight: "100" }}>Gym Weight</Typography>
                                <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</Typography>

                            </Box>
                            <Button style={{ backgroundColor: "white", border: "none", color: "#BCBCBC", padding: "0", paddingBottom: "20px", fontSize: "22px", paddingTop: "10px" }}>Reviews (24)</Button>
                        </Card.Body>
                    </Card>
                </Box>
                <Box sx={{ width: { xs: "80%", md: "27%" } }}>

                    <Card style={{ width: '100%', }}>
                        <Box sx={{ width: "100%" }}>

                            <Card.Img variant="top" style={{ width: "100%" }} src={img5} />
                        </Box>
                        <Card.Body>
                            <Card.Text style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                <Box >
                                    <FaStar style={{ color: "#EDE861", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#EDE861", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#EDE861", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#BCBCBC", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#BCBCBC", fontSize:"20px" }} />
                                </Box>
                                <Typography color='#BCBCBC'> $499.00</Typography>

                            </Card.Text>
                            <Box>
                                <Typography sx={{ fontSize: "30px", fontWeight: "100" }}>Cloud Nike Shoes</Typography>
                                <Typography >Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.</Typography>

                            </Box>
                            <Button style={{ backgroundColor: "white", border: "none", color: "#BCBCBC", padding: "0", paddingBottom: "20px", fontSize: "22px", paddingTop: "10px" }}>Reviews (42)</Button>
                        </Card.Body>
                    </Card>
                </Box>  <Box sx={{ width: { xs: "80%", md: "27%" } }}>

                    <Card style={{ width: '100%', }}>
                        <Box sx={{ width: "100%" }}>

                            <Card.Img variant="top" style={{ width: "100%" }} src={img6} />
                        </Box>
                        <Card.Body>
                            <Card.Text style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                <Box >
                                    <FaStar style={{ color: "#EDE861", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#EDE861", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#EDE861", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#BCBCBC", fontSize:"20px" }} />
                                    <FaStar style={{ color: "#BCBCBC" , fontSize:"20px"}} />
                                </Box>
                                <Typography color='#BCBCBC'> $600.00</Typography>

                            </Card.Text>
                            <Box>
                                <Typography sx={{ fontSize: "30px", fontWeight: "100" }}>Summer Addides Shoes</Typography>
                                <Typography >Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</Typography>

                            </Box>
                            <Button style={{ backgroundColor: "white", border: "none", color: "#BCBCBC", padding: "0", paddingBottom: "20px", fontSize: "22px", paddingTop: "10px" }}>Reviews (74)</Button>
                        </Card.Body>
                    </Card>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default Home_card1;