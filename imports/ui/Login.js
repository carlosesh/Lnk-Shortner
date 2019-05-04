import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div>
            <h1>Login to Short Lnk</h1>
            Login form here
            <Link to='/signup'>Have an account?</Link>
        </div>
    );
};

export default Login;