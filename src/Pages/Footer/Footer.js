import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import footerBg from '../../images/footer-bg.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerBackground = {
    backgroundImage: `url(${footerBg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Footer = () => {
    return (
        <div>
            <Container style={footerBackground} sx={{ mt: 8 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6} >
                                <Typography sx={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>nice</Typography>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Emergency Dental Care</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Treatement of Personal Disaese</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Tooth Extraction</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6}>
                                <Typography sx={{ color: '#5CE7ED', fontSize: 18, fontWeight: 'bold' }}>Services</Typography>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Emergency Dental Care</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Treatement of Personal Disaese</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Tooth Extraction</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6}>
                                <Typography sx={{ color: '#5CE7ED', fontSize: 18, fontWeight: 'bold' }}>Oral Health</Typography>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Emergency Dental Care</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Check Up</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Treatement of Personal Disaese</Button></Link>
                                <Link to="/appointment" style={{ textDecoration: "none" }}><Button style={{ color: 'gray', fontSize: 12 }}>Tooth Extraction</Button></Link>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6}>
                                <Typography sx={{ color: '#5CE7ED', fontSize: 18, fontWeight: 'bold' }}>Our Address</Typography>
                                <Typography sx={{ color: 'gray', fontSize: 14, my: 3 }}>New York - 101010 Hardson Yards</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6}>
                                <Link to="/appointment"><FacebookIcon sx={{ color: "#5ce7ed", mr: 2 }} /></Link>
                                <Link to="/appointment"><GoogleIcon sx={{ color: "#5ce7ed", mr: 2 }} /></Link>
                                <Link to="/appointment"><TwitterIcon sx={{ color: "#5ce7ed" }} /></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography sx={{ mt: 5, color: 'gray', fontSize: 14 }}>Copywrite 2021 All Rights Reserved</Typography>
            </Container>
        </div>
    );
};

export default Footer;