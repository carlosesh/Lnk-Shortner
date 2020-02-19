import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import LinksList from './LinksList'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('LinksList', function () {
        it('Should render LinkList with no links found', function () {
            const wrapper = shallow(<LinksList />);
            const pText = wrapper.find('p').text();

            expect(pText).toBe('No Links Found');
        })
    })
}