import React, { useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

const Login = (props) => {

    const [messageState, setMessageState] = useState({
        error: ''
    });

    const emailRef = createRef();
    const passwordRef = createRef();

    const onSubmit = (e) => {
        e.preventDefault();

        let email = emailRef.current.value;
        let password = passwordRef.current.value;

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                setMessageState({
                    error: 'Unable to login. Check Email and Password'
                });
            } else {
                setMessageState({
                    error: ''
                });
            }
        });
    }

    return (
        <div>
            <h1>Login to Short Lnk</h1>

            {messageState.error ? <p>{messageState.error}</p> : undefined}

            <form onSubmit={onSubmit} noValidate>
                <input type='email' ref={emailRef} name='email' placeholder='Email'/>
                <input type='password' ref={passwordRef} name='password' placeholder='Password'/>
                <button>Login</button>
            </form>

            <Link to='/signup'>Have an account?</Link>
        </div>
    );
};

export default Login;