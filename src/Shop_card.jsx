import Card from 'react-bootstrap/Card';
import { Grid2, Box, Typography } from "@mui/material"
import { FaStar } from "react-icons/fa6";
import img1 from "./assets/shop_01.jpg"
import img2 from "./assets/shop_02.jpg"
import img3 from "./assets/shop_03.jpg"
import img4 from "./assets/shop_04.jpg"
import img5 from "./assets/shop_05.jpg"
import img6 from "./assets/shop_06.jpg"
import img7 from "./assets/shop_07.jpg"
import img8 from "./assets/shop_08.jpg"
import img9 from "./assets/shop_09.jpg"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function BasicExample() {
    return (
        <>

            <Grid2 sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", my: "20px" }}>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$242.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$65.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$129.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img5} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$454.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img6} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }} Oupidatat non>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$234.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img7} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$54.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img8} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$34.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img9} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "100" }}>Oupidatat non</Card.Title>
                        <Card.Text>M/L/X/XL</Card.Text>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box>
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#EDE861", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                                <FaStar style={{ color: "#BCBCBC", fontSize: "23px" }} />
                            </Box>
                            <Typography sx={{ my: "8px", color: "#BCBCBC", fontWeight: "600" }}>$45.00</Typography>
                        </Box>

                    </Card.Body>
                </Card>

            </Grid2>
            <Stack spacing={2} sx={{ float: "right" ,mx:'45px' }}>
                <Pagination count={10} color="secondary" />
            </Stack>
        </>

    );
}

export default BasicExample;