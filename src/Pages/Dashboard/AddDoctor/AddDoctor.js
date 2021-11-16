import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        // const fileField = document.querySelector('input[type="file"]');

        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://gentle-thicket-16069.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    console.log('doctor added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>Add Doctor</h2>
            {success &&
                <Alert severity="success">Doctor Added Successfully!</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={e => setName(e.target.value)}
                    label="Name"
                    type="text"
                    required
                    variant="standard" />
                <br /><br />
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={e => setEmail(e.target.value)}
                    label="Email"
                    type="email"
                    required
                    variant="standard" />
                <br /><br />
                <Input
                    onBlur={e => setImage(e.target.files[0])}
                    accept="image/*"
                    type="file" />
                <br /><br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;