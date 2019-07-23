import React, { useState, useEffect } from 'react';
import LinkListItem from './LinkListItem';
import FlipMove from 'react-flip-move';

import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

const LinksList = (props) => {

    const [linkState, setLinkState] = useState({
        links: []
    });

    useEffect(() => {
        linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find({
                visible: Session.get('showVisible')
            }).fetch();
            setLinkState({
                links: links
            });
        });

        return function cleanup() {
            linksTracker.stop();
        }
    }, []);

    const renderLinks = () => {
        if (linkState.links.length == 0) {
            return (
                <div className="item">
                    <p className="item__status-message">No Links Found</p>
                </div>
            )
        }

        return linkState.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return (
                <div key={link._id}>
                    <LinkListItem key={link._id} shortUrl={shortUrl} {...link} />
                </div>
            )
        });
    };

    return (
        <div>
            <FlipMove maintainContainerHeight={true}>
                {renderLinks()}
            </FlipMove>
        </div>
    );

};

export default LinksList;