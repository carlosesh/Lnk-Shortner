import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { render } from 'enzyme';
import PrivateHeader from './PrivateHeader';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    let wrapper;

    before(function () {
        wrapper = render(<PrivateHeader title='ABC' />);
    });

    describe('PrivateHeader', function () {
        it('Should render Private Header with logout button', function () {
            const buttonText = wrapper.find('button').text();

            expect(buttonText).toBe('Logout');
        })

        it('Should render Private Header with title ABC', function () {
            const headerText = wrapper.find('h1').text();

            expect(headerText).toBe('ABC');
        })
    })

}