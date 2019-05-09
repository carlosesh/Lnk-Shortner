import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

const Signup = (props) => {

    const [messageState, setMessageState] = useState({
        error: ''
    });

    let emailInputRef = useRef();
    let passwordInputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        let email = emailInputRef.current.value;
        let password = passwordInputRef.current.value;

        Accounts.createUser({ email, password }, (err) => {
            if (err) {
                setMessageState({
                    error: err.reason
                });
            } else {
                setMessageState({
                    error: ''
                });
            }
        });
    };

    return (
        <div>
            <h1>Join Short Lnk</h1>

            {messageState.error ? <p>{messageState.error}</p> : undefined}

            <form onSubmit={onSubmit} noValidate>
                <input type='email' ref={emailInputRef} name='email' placeholder='Email' />
                <input type='password' ref={passwordInputRef} name='password' placeholder='Password' />
                <button type="submit" variant='contained' color='secondary'>Create Account</button>
            </form>
            <Link to='/'>Already have an account?</Link>
        </div>
    );
};

export default Signup;