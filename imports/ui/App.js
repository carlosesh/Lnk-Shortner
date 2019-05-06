import React from 'react';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import history from '../utils/history';

import { Route, Switch } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

const authenticatedPages = ['/links'];
const unAuthenticatedPages = ['/', '/signup'];

const routes = (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/links' component={Link} />
        <Route path='*' component={NotFound} />
    </Switch>
);

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathName = history.location.pathname;
    const isAuthenticatedPage = authenticatedPages.includes(pathName);
    const isUnAuthenticatedPage = unAuthenticatedPages.includes(pathName);

    if(isUnAuthenticatedPage && isAuthenticated) {
        history.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.push('/');
    }
});

const App = (props) => {
    return (
        <div>
            {routes}
        </div>
    );
};

export default App;