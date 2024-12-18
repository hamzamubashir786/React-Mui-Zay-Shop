import { Grid2, Box, Typography } from "@mui/material"
import About_accordian from "./Shop_accordian"
import Shop_card from "./Shop_card"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const About = () => {
    return (
        <>
            <Grid2 sx={{ width: "100%", display: "flex", justifyContent: "center",py:"30px",flexDirection:{xs:"column" , md:"row"} , backgroundColor: "#F6F6F6" }}>
                <Box sx={{ width: { xs: "100%", md: "25%" }, padding: "20px" }} >

                    <Typography sx={{ fontSize: "30px" }}>Categories</Typography>
                    <About_accordian />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "65%" , padding:"20px" } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <Typography>All Men's Women's</Typography>

                        <Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Featured</InputLabel>
                                    <Select            >
                                        <MenuItem value={10}>Featured</MenuItem>
                                        <MenuItem value={20}>A To Z</MenuItem>
                                        <MenuItem value={30}>Item</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                        </Box>
                    </Box>
                    <Shop_card />


                </Box>


            </Grid2 >

        </>
    )
}

export default About;