import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TextFieldSizes() {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ width: "100%", px: "5vw", my: "40px", }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                    <TextField sx={{ width: { xs: "100%", md: "48%" } }} label="Name" placeholder='Enter Your Name' />
                    <TextField sx={{ width: { xs: "100%", md: "48%" } }} label="Email" placeholder='Enter Your Email' />
                    <TextField sx={{ width: "100%" }} label="Subject" placeholder='Enter Your Subject' />
                    <TextField sx={{ width: "100%", height: "250px" }} multiline rows={10} label="Message" placeholder='Enter Your Message' />
                    <Button variant="contained" sx={{float:"right" , margin:"20px auto"}} >Sign Up</Button>

                </Box>

            </Box>
        </Box>
    );
}
