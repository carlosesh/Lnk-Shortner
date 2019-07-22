import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';

const LinkListItem = (props) => {

    const copyRef = useRef();

    const [copyState, setCopyState] = useState(false);

    useEffect(() => {
        let clipboard = new Clipboard(copyRef.current);

        clipboard.on('success', () => {
            setCopyState(true);
            setTimeout(() => setCopyState(false), 1000);
        }).on('error', () => {
            alert("Unable to Copy, please manually copy the link")
        });

        return function cleanup() {
            clipboard.destroy();
        };
    });

    const renderStats = () => {
        const visitMessage = props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage = null;
        if(typeof props.lastVisitedAt === 'number') {
            visitedMessage = `(visited ${ moment(props.lastVisitedAt).fromNow() })`;
        }

        return <p>{props.visitedCount} {visitMessage} {visitedMessage}</p>
    };

    return (
        <div>
            <p>{props.url}</p>
            <p>{props.shortUrl}</p>
            <p>{props.visible.toString()}</p>
            {renderStats()}
            <a className="button button--pill button--link" href={props.shortUrl} target="_blank">
                Visit
            </a>
            <button className="button button--pill" ref={copyRef} data-clipboard-text={props.shortUrl}>{copyState ? 'Copied' : 'Copy'}</button>
            <button className="button button--pill" onClick={() => {
                Meteor.call('links.setVisibility', props._id, !props.visible)
            }}>
                {props.visible ? 'Hide' : 'Unhide'}
            </button>
        </div>
    );
};

LinkListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    shortUrl: PropTypes.string.isRequired,
    visitedCount: PropTypes.number.isRequired,
    lastVisitedAt: PropTypes.number
}

export default LinkListItem;