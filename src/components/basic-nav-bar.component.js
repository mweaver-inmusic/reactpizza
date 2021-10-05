import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

const BasicNavbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" color="inherit">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <NavLink to="/">
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                        </NavLink>
                    </Box>
                    <NavLink to="/login">
                        <Button>Login</Button>
                    </NavLink>
                    <NavLink to="/register">
                        <Button>Register</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default BasicNavbar;