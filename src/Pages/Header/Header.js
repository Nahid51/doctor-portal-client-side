import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1, mb: 5 }}>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                                Doctors Portal
                            </Typography>
                        </NavLink>
                        <Box sx={{ ml: 'auto', display: 'flex' }}>
                            <NavLink to="/" style={{ textDecoration: "none" }}>
                                <Button sx={{ color: 'white' }}>Home</Button>
                            </NavLink>
                            <NavLink to="/appointment" style={{ textDecoration: "none" }}>
                                <Button sx={{ color: 'white' }}>Appointment</Button>
                            </NavLink>

                            {user.email ?
                                <Box>
                                    <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                                        <Button sx={{ color: 'white' }}>Dashboard</Button>
                                    </NavLink>
                                    <Button onClick={logOut} sx={{ color: 'white' }}>logout</Button>
                                </Box>
                                :
                                <NavLink to="/login" style={{ textDecoration: "none" }}>
                                    <Button sx={{ color: 'white' }}>Login</Button>
                                </NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;