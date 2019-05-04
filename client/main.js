import React from 'react';
import ReactDOM from 'react-dom'
import App from '../imports/ui/App';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Router } from "react-router";
import history from "../imports/utils/history";

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
