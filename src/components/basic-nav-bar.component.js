import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

const BasicNavbar = ({ user, setUser }) => {
    async function signout(){
        await fetch("http://localhost:5000/account/signout");
        setUser('');
    }
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
                    {user !== '' ? <>{user}<IconButton><AccountCircleIcon /></IconButton><Button variant="outlined" onClick={signout}>Signout</Button></> :
                    <Box>                        
                        <Link to="/login" style={{ textDecoration: "none", marginRight: 16 }}>
                            <Button variant="outlined">Login</Button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Register</Button>
                        </Link>
                    </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default BasicNavbar;