import React, { useState } from 'react';
import { Button, TextField } from '@mui/material'; // Import TextField from Material-UI
import { useDispatch } from 'react-redux';
// import { loginUser } from './UserReducer';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // Dispatch login action
        dispatch(loginUser({ username, password }));
        // Redirect to home page after login
        // navigate('/');
    }

    return (
        <div>
            <h2>Juchheim CMS Login</h2>
            <form onSubmit={handleSubmit} action="">
                <div>
                <Button variant="contained" color='primary' style={{boxSizing:'border-box',
                     borderRadius:'3px', width:'100px', margin:'5px'}} htmlFor="">LoginID</Button>
                    <TextField
                    error
                        id="username"
                        label="Username"
                        variant="outlined"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <Button variant="contained" color='primary' style={{boxSizing:'border-box',
                     borderRadius:'3px', width:'100px', margin:'5px'}} htmlFor="">Password</Button>
                    <TextField
                    error
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;