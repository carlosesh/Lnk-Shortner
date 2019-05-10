import React from 'react';

import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { routes, onAuthChange } from '../routes/routes'

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

const App = (props) => {
    return (
        <div>
            {routes}
        </div>
    );
};

export default App;