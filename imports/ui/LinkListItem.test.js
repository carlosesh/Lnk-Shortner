import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect'
import { shallow } from 'enzyme';
import LinkListItem from './LinkListItem'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe('LinkListItem', function () {
        it('Should render anchor tag with text Visit', function () {
            const wrapper = shallow(<LinkListItem />);
            const aText = wrapper.find('a').text();

            expect(aText).toBe('Visit');
        })

        it('Should render copy button', function () {
            const wrapper = shallow(<LinkListItem/>);
            const buttonText = wrapper.find('button').first().text();

            expect(buttonText).toBe('Copy');
        })

        it('Should render h2 header with the property URL=www.google.com', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" />);
            const h2Text = wrapper.find('h2').text();

            expect(h2Text).toBe('www.google.com');
        })

        it('Should render short URL', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" shortUrl="localhost:3000/AbCdE"/>);
            const shortUrlText = wrapper.find('p').first().text();

            expect(shortUrlText).toBe('localhost:3000/AbCdE');
        })

        it('Should be visible and button should change to Hide', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" shortUrl="localhost:3000/AbCdE" visible={true} />);
            const buttonText = wrapper.find('button').last().text();

            expect(buttonText).toBe('Hide');
        })

        it('Should be visible and button should change to Hide', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" shortUrl="localhost:3000/AbCdE"/>);
            const buttonText = wrapper.find('button').last().text();

            expect(buttonText).toBe('Unhide');
        })

        it('Should remain as visits when the visit prop is equal to 0', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" shortUrl="localhost:3000/AbCdE" visible={true} visitedCount={0}/>);
            const pText = wrapper.find('p').last().text();

            expect(pText).toBe('0 visits ');
        })

        it('Should change to Visits when the visit prop is equal or greater than 1', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" shortUrl="localhost:3000/AbCdE" visible={true} visitedCount={1}/>);
            const pText = wrapper.find('p').last().text();

            expect(pText).toBe('1 visit ');
        })

        it('Should change to Visits when the visit prop is 2 or greater', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" shortUrl="localhost:3000/AbCdE" visible={true} visitedCount={2}/>);
            const pText = wrapper.find('p').last().text();

            expect(pText).toBe('2 visits ');
        })

        it('Should render lastVisitedAt when provided as a property', function () {
            const wrapper = shallow(<LinkListItem url="www.google.com" shortUrl="localhost:3000/AbCdE" visible={true} visitedCount={2} lastVisitedAt={1}/>);
            const pText = wrapper.find('p').last().text();

            expect(pText).toBe('2 visits (visited 50 years ago)');
        })
        
    })
}