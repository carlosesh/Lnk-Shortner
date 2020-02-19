import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import Login from './Login'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    let wrapper;

    before(function () {
        wrapper = shallow(<Login />);
    });

    describe('Login', function () {
        it('Should display header', function () {
            const shortLinkText = wrapper.find('h1').text();
            expect(shortLinkText).toBe('Short Lnk');
        })

        it('Should display a login button', function () {
            const buttonText = wrapper.find('button').text();
            
            expect(buttonText).toBe('Login');
        })

        it('Should display text implying if you need an account', function () {
            expect(wrapper.debug()).toContain('Need an account?')
        })
    })

}