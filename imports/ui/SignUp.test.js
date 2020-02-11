import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import Signup from './Signup'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('Signup', function () {
        it('Should render Signup Page', function () {
            const wrapper = shallow(<Signup />);
            const buttonText = wrapper.find('button').text();
            const joinShortLinkText = wrapper.find('h1').text();

            expect(buttonText).toBe('Create Account');
            expect(joinShortLinkText).toBe('Join Short Lnk');
        })
    })

}