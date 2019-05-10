import React from 'react';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import history from '../utils/history';

import { Route, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

const authenticatedPages = ['/links'];
const unAuthenticatedPages = ['/', '/signup'];

export const onAuthChange = (isAuthenticated) => {
    const pathName = history.location.pathname;
    const isAuthenticatedPage = authenticatedPages.includes(pathName);
    const isUnAuthenticatedPage = unAuthenticatedPages.includes(pathName);

    if (isUnAuthenticatedPage && isAuthenticated) {
        history.replace('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.replace('/');
    }
};

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

export const routes = (
    <Switch>
        <Route exact path='/' component={Login} onEnter={onEnterPublicPage} />
        <Route path='/signup' component={Signup} onEnter={onEnterPublicPage} />
        <Route path='/links' component={Link} onEnter={onEnterPrivatePage} />
        <Route path='*' component={NotFound} />
    </Switch>
);