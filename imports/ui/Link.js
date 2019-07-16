import React from 'react';
import LinkList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

const Link = (props) => {
    return (
        <div>
            <PrivateHeader title ='Your Links'/>
            <LinkList/>
            <AddLink/>
        </div>
    );
};

export default Link;