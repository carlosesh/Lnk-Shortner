import React from 'react';

import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { routes, onAuthChange } from '../routes/routes'
import { Links } from '../api/links';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
    let links = Links.find({}).fetch();
    console.log(links);
});

const App = (props) => {
    return (
        <div>
            {routes}
        </div>
    );
};

export default App;