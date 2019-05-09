import React from 'react';
import ReactDOM from 'react-dom'
import App from '../imports/ui/App';
import history from "../imports/utils/history";

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Router } from "react-router";

const app = (
  <Router history={history}>
    <App/>
  </Router>
);

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(app, document.getElementById('app'));
  })
});
