import React, { useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

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
            <button ref={copyRef} data-clipboard-text={props.shortUrl}>{copyState ? 'Copied' : 'Copy'}</button>
        </div>
    );
};

LinkListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired
}

export default LinkListItem;