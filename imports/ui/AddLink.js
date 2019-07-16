import React, { useRef } from 'react';
import { Meteor } from 'meteor/meteor';

const AddLink = () => {

    let urlInputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const url = urlInputRef.current.value.trim();

        if (url) {
            Meteor.call('links.insert', url);
            urlInputRef.current.value = '';
        }
    };

    return (
        <div>
            <p>Add link</p>
            <form onSubmit={onSubmit}>
                <input type='text' ref={urlInputRef} placeholder='url' />
                <button>Add Link</button>
            </form>
        </div>
    );
};

export default AddLink;