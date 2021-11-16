import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, CardMedia, Container, Typography } from '@mui/material';
import img from '../../images/treatment.png'
import { Link } from 'react-router-dom';

const DentalCare = () => {
    return (
        <div>
            <Container sx={{ flexGrow: 1, my: 8 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={3} md={5} >
                        <CardMedia
                            component="img"
                            image={img}
                            width="80px"
                            alt="Treatment Image"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box sx={{ textAlign: 'left', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: 36, fontWeight: 700 }}>Exceptional Dental Care, on Your Terms</Typography>
                            <Typography sx={{ my: 5, color: 'gray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos veniam, recusandae, asperiores, voluptate error possimus officia repellendus aspernatur autem debitis eum sed libero quis inventore. Laborum deleniti voluptates necessitatibus id ipsa, sapiente soluta magni libero, vitae sit neque dolore recusandae earum nihil? Amet perferendis excepturi commodi dolore praesentium accusamus.</Typography>
                            <Link to="/none" style={{ textDecoration: 'none' }}><Button className="btn-grad" sx={{ color: 'white' }}>Learn More</Button></Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default DentalCare;