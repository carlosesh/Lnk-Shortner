import React from 'react';
import LinkList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilter';

const Link = (props) => {
    return (
        <div>
            <PrivateHeader title='Your Links' />
            <div className="page-content">
                <LinksListFilter />
                <AddLink />
                <LinkList />
            </div>
        </div>
    );
};

export default Link;