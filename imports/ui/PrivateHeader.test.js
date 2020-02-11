import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { render } from 'enzyme';
import PrivateHeader from './PrivateHeader';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('PrivateHeader', function () {
        it('Should render Private Header with logout button', function () {
            const wrapper = render(<PrivateHeader title='ABC' />);
            const buttonText = wrapper.find('button').text();
            const headerText = wrapper.find('h1').text();

            expect(buttonText).toBe('Logout');
            expect(headerText).toBe('ABC');
        })
    })

}