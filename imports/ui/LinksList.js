import React, { useState, useEffect } from 'react';
import { Links, LinksList as linksMap } from '../api/links';
import { Tracker } from 'meteor/tracker';

const LinksList = (props) => {

    const [linkState, setLinkState] = useState({
        links: []
    });

    useEffect(() => {
        console.log('coomponentDidMount LinksList');

        // setLinkState({
        //     links: linksMap
        // });
    });

    const renderLinks = () => {
        let linksList = Links.find().fetch();

        // return linkState.links.map((link) => {
        //     return (
        //         <p key={link._id}>{link}</p>
        //     );
        // });
    };

    return (
        <div>
            <p>Links List</p>
            {renderLinks()}
        </div>
    );

};

export default LinksList;