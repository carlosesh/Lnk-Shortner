import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { render } from 'enzyme';

import Link from './Link';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('AddLink', function () {
        it('Should create an Add Link Button', function () {
            const wrapper = render(<Link />);
            const buttonText = wrapper.find('button').text();

            console.log(wrapper)
        })
    })

}