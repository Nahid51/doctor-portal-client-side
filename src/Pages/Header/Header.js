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
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <NavLink to="/appointment" style={{ textDecoration: "none" }}><Button sx={{ color: 'white' }}>Appointment</Button></NavLink>

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
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;