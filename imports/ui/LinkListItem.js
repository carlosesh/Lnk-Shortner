import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

const LinkListItem = (props) => {

    let copyRef = useRef();
    let clipboard = null;

    useEffect(() => {
        console.log(copyRef.current.dataset.clipboardText.trim());
        clipboard = new Clipboard(copyRef.current.dataset.clipboardText.trim());

        clipboard.on('sucess', () => {
            alert("It Worked!");
        }).on('error', () => {
            alert("Unable to Copy, please manually copy the link")
        });

        return function cleanup() {
            clipboard.destroy();
            console.log("clenaup for link list item");
        };
    }, []);

    return (
        <div>
            <p>{props.url}</p>
            <p>{props.shortUrl}</p>
            <button ref={copyRef} data-clipboard-text={props.shortUrl}>Copy</button>
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