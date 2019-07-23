import React, { useState, useEffect } from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

const LinksListFilte = (props) => {
    const [visibilityState, setVisibilityState] = useState({
        showVisible: true
    });

    useEffect(() => {
        visibilityTracker = Tracker.autorun(() => {
            setVisibilityState({
                showVisible: Session.get('showVisible')
            });
        });

        return function cleanup() {
            visibilityTracker.stop();
        }
    }, []);

    return (
        <div>
            <label className="checkbox">
                <input className="checkbox__box" type='checkbox' checked={!visibilityState.showVisible} onChange={(e) => {
                    Session.set('showVisible', !e.target.checked);
                }} />
                Show hidden Links
            </label>
        </div>
    );
}

export default LinksListFilte;