import React from 'react';
import history from '../utils/history'

import {Accounts} from 'meteor/accounts-base';

const Link = (props) => {

    const onLogout = () => {
        Accounts.logout();
        console.log('User logged out');
    }

    return (
        <div>
            <h1>Your Links</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Link;