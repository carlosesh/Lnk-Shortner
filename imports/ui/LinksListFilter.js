import React from 'react';
import { Session } from 'meteor/session';

const LinksListFilte = (props) => {
    return (
        <div>
            <label>
                <input type='checkbox' onChange={(e) => {
                    Session.set('showVisible', !e.target.checked);
                }} />
                Show hidden Links
            </label>
        </div>
    );
}

export default LinksListFilte;