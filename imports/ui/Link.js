import React from 'react';
import LinkList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilter';

const Link = (props) => {
    return (
        <div>
            <PrivateHeader title ='Your Links'/>
            <LinksListFilter/>
            <AddLink/>
            <LinkList/>
        </div>
    );
};

export default Link;