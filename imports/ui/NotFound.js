import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Page Not Found</h1>
                <p>We're unable to find that page.</p>
                <Link className="button button--link" to='/'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;