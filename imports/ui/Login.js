import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

const Login = (props) => {

    const emailRef = createRef();
    const passwordRef = createRef();

    const onSubmit = (e) => {
        e.preventDefault();

        let email = emailRef.current.value;
        let password = passwordRef.current.value;

        Meteor.loginWithPassword({email}, password, (err) => {
            console.log('Login callback', err);
        });
    }

    return (
        <div>
            <h1>Login to Short Lnk</h1>

            <form onSubmit={onSubmit}>
                <input type='email' ref={emailRef} name='email' placeholder='Email'/>
                <input type='password' ref={passwordRef} name='password' placeholder='Password'/>
                <button>Login</button>
            </form>

            <Link to='/signup'>Have an account?</Link>
        </div>
    );
};

export default Login;