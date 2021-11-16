import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const BannerBelow = () => {
    return (
        <div>
            <Container sx={{ flexGrow: 1, mb: 8 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4} >
                        <Box sx={{ flexGrow: 1, backgroundColor: '#5ce7ed', borderRadius: 1, my: 1, height: 90 }}>
                            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ alignItems: 'center' }}>
                                <Grid item xs={1} sm={2} md={4}>
                                    <AccessTimeIcon sx={{ color: 'white', fontSize: 50 }} />
                                </Grid>
                                <Grid item xs={3} sm={4} md={8} sx={{ textAlign: 'left', color: 'white' }} >
                                    <Typography sx={{ fontSize: 12, fontWeight: 700, mb: 1 }}>Opening Hours</Typography>
                                    <Typography sx={{ fontSize: 12 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente.</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Box sx={{ flexGrow: 1, backgroundColor: '#43495d', borderRadius: 1, my: 1, height: 90 }}>
                            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ alignItems: 'center' }}>
                                <Grid item xs={1} sm={2} md={4}>
                                    <LocationOnIcon sx={{ color: 'white', fontSize: 50 }} />
                                </Grid>
                                <Grid item xs={3} sm={4} md={8} sx={{ textAlign: 'left', color: 'white' }} >
                                    <Typography sx={{ fontSize: 12, fontWeight: 700, mb: 1 }}>Visit Our Location</Typography>
                                    <Typography sx={{ fontSize: 12 }}>New York - 101010 Hardson Yards</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Box sx={{ flexGrow: 1, backgroundColor: '#5ce7ed', borderRadius: 1, my: 1, height: 90 }}>
                            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ alignItems: 'center' }}>
                                <Grid item xs={1} sm={2} md={4}>
                                    <CallIcon sx={{ color: 'white', fontSize: 50 }} />
                                </Grid>
                                <Grid item xs={3} sm={4} md={8} sx={{ textAlign: 'left', color: 'white' }} >
                                    <Typography sx={{ fontSize: 12, fontWeight: 700, mb: 1 }}>Contact Us Now</Typography>
                                    <Typography sx={{ fontSize: 12 }}>+000 123 456789</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default BannerBelow;