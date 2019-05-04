import React from 'react';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import "typeface-roboto";

import { Route, Switch } from 'react-router-dom';

const routes = (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/links' component={Link} />
        <Route path='*' component={NotFound} />
    </Switch>
);

const App = (props) => {
    return (
        <div>
            {routes}
        </div>
    );
};

export default App;