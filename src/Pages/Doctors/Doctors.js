import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://gentle-thicket-16069.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDoctors(data)
            })
    }, [])
    return (
        <div>
            <h2>Our Doctors: {doctors.length}</h2>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {doctors.map((doctor) => (
                        <Grid item xs={4} sm={4} md={4} key={doctor._id}>
                            <Doctor
                                doctor={doctor}
                            ></Doctor>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;