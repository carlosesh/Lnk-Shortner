import React from 'react';
import history from '../utils/history'

const Link = (props) => {
    return (
        <div>
            <p>Link component</p>
            <button onClick={() => history.push('/')}>Go To Login Page</button>
        </div>
    );
};

export default Link;