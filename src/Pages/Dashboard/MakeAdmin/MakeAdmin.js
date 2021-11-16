import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const hanldeOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };
        fetch('https://gentle-thicket-16069.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    // setEmail('');
                    setSuccess(true);
                }
            })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form>
                <TextField label="Email" variant="standard" type="email" onBlur={hanldeOnBlur} />
            </form>
            <Button onClick={handleAdminSubmit} className="btn-grad" sx={{ color: 'white', mt: 5 }} type="submit">Make Admin</Button>
            {success && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;