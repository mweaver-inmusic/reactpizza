import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/400.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Redirect} from 'react-router-dom';

const Register = ({ user, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submit() {
        let response = await fetch("http://localhost:5000/account/register", {
            method: 'post',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        });
        let u = await response.json();
        setUser(u.email);
    }
    return user === ''

        ?

        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Stack spacing={2}>
                <Typography variant="h3">Register</Typography>
                <TextField label="Email" onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" onClick={submit}>Register</Button>
                <Button component={Link} to="/login">Already have an account? Login here</Button>
            </Stack>
        </Container>

        :

        <Redirect to="/" />
}

export default Register;