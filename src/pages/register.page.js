import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/400.css';

const Register = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Stack spacing={2}>
                <Typography variant="h3">Register</Typography>
                <TextField label="Email" />
                <TextField label="Password" />
                <Button variant="contained">Register</Button>
                <Button>Already have an account? Login here</Button>
            </Stack>
        </Container>
    );
}

export default Register;