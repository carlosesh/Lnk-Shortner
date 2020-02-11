import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import NotFound from './NotFound'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('NotFound', function () {
        it('Should render Page not found', function () {
            const wrapper = shallow(<NotFound/>);          
            const h1Text = wrapper.find('h1').text();

            expect(h1Text).toBe('Page Not Found');
        })
    })

}