import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div>
            <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: "80px", margin: "0 auto" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Service;