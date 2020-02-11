import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';

import Link from './Link';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('Link', function () {
        it('should Render', function () {
            const wrapper = shallow(<Link />);
            expect(wrapper.isEmptyRender()).toBe(false);
        })
    })

}