import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';
import { Tracker } from 'meteor/tracker';

const LinksList = (props) => {

    const [linkState, setLinkState] = useState({
        links: []
    });

    useEffect(() => {
        linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            setLinkState({
                links: links
            });
        });

        return function cleanup() {
            linksTracker.stop();
        }
    }, []);

    const renderLinks = () => {
        return linkState.links.map((link) => {
            return <p key={link._id}>{link.url}</p>
        });
    };

    return (
        <div>
            <p>Links List</p>
            {renderLinks()}
        </div>
    );

};

export default LinksList;