import React, { useRef } from 'react';
import history from '../utils/history';
import LinkList from './LinksList';

import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';

const Link = (props) => {

    const onLogout = () => {
        Accounts.logout();
        console.log('User logged out');
    }

    let urlInputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const url = urlInputRef.current.value.trim();

        if (url) {
            Links.insert({ url });
            urlInputRef.current.value = '';
        }
    };

    return (
        <div>
            <h1>Your Links</h1>
            
            <LinkList/>

            <button onClick={onLogout}>Logout</button>

            <p>Add link</p>
            <form onSubmit={onSubmit}>
                <input type='text' ref={urlInputRef} placeholder='url' />
                <button>Add Link</button>
            </form>
        </div>
    );
};

export default Link;