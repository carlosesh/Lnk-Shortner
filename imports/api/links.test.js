import { Meteor } from 'meteor/meteor';
import { linksInsert, Links } from '../../imports/api/links'
import expect from 'expect';

if (Meteor.isServer) {
    describe('Links', function () {

        const linkOne = {
            _id: 'testLinkId',
            url: 'https://docs.mongodb.com/manual/reference/method/db.collection.find/',
            userId: 'testid'
          };

        it('Should not Insert a new Link if not authenticated', function () {
            expect( () => {
                linksInsert.apply();
            }).toThrow();
        })

        it('Should Insert a new Link', function () {
            const _id = linksInsert.apply({userId: linkOne.userId}, [linkOne.url]);
            expect(Links.findOne({ _id}));
        })

    });
}