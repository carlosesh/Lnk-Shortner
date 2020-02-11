import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import Signup from './Signup'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    let wrapper;

    before(function () {
        wrapper = shallow(<Signup />);
    });

    describe('Signup', function () {
        it('Should render Signup Page and Create Account Button', function () {
            const buttonText = wrapper.find('button').text();
            
            expect(buttonText).toBe('Create Account');
        })

        it('Should render Signup Page and it\'s proper header', function () {
            const joinShortLinkText = wrapper.find('h1').text();

            expect(joinShortLinkText).toBe('Join Short Lnk');
        })
    })

}