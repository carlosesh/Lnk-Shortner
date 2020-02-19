import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import NotFound from './NotFound'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    let wrapper;

    before(function () {
        wrapper = shallow(<NotFound />);
    });

    describe('NotFound', function () {
        it('Should render header with Page not found', function () {
            const h1Text = wrapper.find('h1').text();

            expect(h1Text).toBe('Page Not Found');
        })

        it('Should render We\'re unable to find that page', function () {
            const pText = wrapper.find('p').text();

            expect(pText).toBe('We\'re unable to find that page.');
        })

        it('Should display a link to go home', function () {
            expect(wrapper.debug()).toContain('Go to Home')
        })
    })
}