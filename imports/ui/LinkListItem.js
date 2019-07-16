import React, { useRef, useEffect, forwardRef} from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

const LinkListItem = (props) => {

    let copy = useRef();
    let clipboard = null;

    useEffect(() => {
        clipboard = new Clipboard(copy.current);

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
            <button ref={copy} data-clipboard-text={props.shortUrl}>Copy</button>
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