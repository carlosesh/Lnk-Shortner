import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import LinksListFilter from './LinksListFilter'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('LinksListFilter', function () {
        it('Should display label Show hidden Links', function () {
            const wrapper = shallow(<LinksListFilter />);
            const showHiddenLinksText = wrapper.find('label').text();

            expect(showHiddenLinksText).toBe('Show hidden Links');
        })
    })

}