import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

const AddLink = () => {

    const [urlState, setUrlState] = useState({
        url: ''
    });

    const [modalState, setModalState] = useState({
        isOpen: false
    });

    const [errorState, setErrorState] = useState({
        error: ''
    });

    const onSubmit = (e) => {
        const url = urlState.url;

        e.preventDefault();

        Meteor.call('links.insert', url, (err, res) => {
            if (!err) {
                cancelHandler();
            } else {
                setErrorState({
                    error: err.reason
                })
            }
        });
    };

    const urlHandler = (event) => {
        setUrlState({
            url: event.target.value
        });
    };

    const cancelHandler = () => {
        setModalState({ isOpen: false });
        setUrlState({ url: '' });
        setErrorState({ error: '' });
    };

    let urlInputRef = useRef();

    return (
        <div>
            <button className="button" onClick={() => setModalState({ isOpen: true })}>Add Link</button>
            <Modal
                isOpen={modalState.isOpen}
                contentLabel='Add link'
                ariaHideApp={false}
                onAfterOpen={() => {urlInputRef.current.focus()}}
                onRequestClose={() => cancelHandler()}
                className="boxed-view__box"
                overlayClassName="boxed-view boxed-view--modal">
                <h1>Add link</h1>
                {errorState.error ? <p>{errorState.error}</p> : undefined}
                <form onSubmit={onSubmit} className="boxed-view__form">
                    <input
                        type='text'
                        placeholder='url'
                        ref={urlInputRef}
                        value={urlState.url}
                        onChange={(event) => urlHandler(event)} />
                    <button className="button">Add Link</button>
                    <button type="button" className="button button--secondary" onClick={() => cancelHandler()}>Cancel</button>
                </form>
            </Modal>
        </div>
    );
};

export default AddLink;