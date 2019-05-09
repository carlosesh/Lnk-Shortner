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

const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        history.replace('/links');
    }
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        history.replace('/');
    }
};

const routes = (
    <Switch>
        <Route exact path='/' component={Login} onEnter={onEnterPublicPage} />
        <Route path='/signup' component={Signup} onEnter={onEnterPublicPage} />
        <Route path='/links' component={Link} onEnter={onEnterPrivatePage} />
        <Route path='*' component={NotFound} />
    </Switch>
);

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathName = history.location.pathname;
    const isAuthenticatedPage = authenticatedPages.includes(pathName);
    const isUnAuthenticatedPage = unAuthenticatedPages.includes(pathName);

    if (isUnAuthenticatedPage && isAuthenticated) {
        history.replace('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.replace('/');
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