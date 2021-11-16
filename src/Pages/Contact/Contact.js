import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import bg from '../../images/appointment-bg.png'

const Contact = () => {
    const appointmentBanner = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: 175
    }
    return (
        <div>
            <Container sx={{ my: 8 }}>
                <Box style={appointmentBanner} sx={{ border: 1, py: 8, color: 'white' }}>
                    <Typography sx={{ color: '#5ce7ed', fontSize: 20, fontWeight: 700 }}>Contact Us</Typography>
                    <Typography sx={{ fontSize: 46, mb: 8 }}>Always Connected Us</Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            '& > :not(style)': { m: 1, width: '75ch', backgroundColor: 'white' },
                        }}
                    >
                        <TextField id="outlined-basic" variant="outlined" placeholder="Email Address" /><br />
                        <TextField id="outlined-basic" variant="outlined" placeholder="Subject" /><br />
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            placeholder="Your Message"
                        />
                    </Box>
                    <Button variant="contained" sx={{ backgroundColor: '#5CE7ED', mt: 3 }}>Learn More</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Contact;