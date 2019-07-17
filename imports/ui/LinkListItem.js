import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
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

    return (
        <div>
            <p>{props.url}</p>
            <p>{props.shortUrl}</p>
            <p>{props.visible.toString()}</p>
            <button ref={copyRef} data-clipboard-text={props.shortUrl}>{copyState ? 'Copied' : 'Copy'}</button>
            <button onClick={() => {
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
    shortUrl: PropTypes.string.isRequired
}

export default LinkListItem;