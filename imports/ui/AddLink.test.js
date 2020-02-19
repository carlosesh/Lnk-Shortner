import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { render } from 'enzyme';

import AddLink from './AddLink';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('AddLink', function () {
        it('Should create an Add Link Button', function () {
            const wrapper = render(<AddLink />);
            const buttonText = wrapper.find('button').text();

            expect(buttonText).toBe('Add Link');
        })
    })

}