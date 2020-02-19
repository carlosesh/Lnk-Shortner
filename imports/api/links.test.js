import { Meteor } from 'meteor/meteor'
import { linksInsert, linksSetVisibility, linksTrackVisit, publishLinks, Links } from '../../imports/api/links'
import expect from 'expect'

if (Meteor.isServer) {
    describe('Links', function () {

        const linkOne = {
            url: 'https://docs.mongodb.com/manual/reference/method/db.collection.find/',
            userId: 'testid',
        };

        beforeEach(function () {
            Links.remove({});
        })

        it('Should not Insert a new Link if not authenticated', function () {
            expect(() => {
                linksInsert.apply();
            }).toThrow();
        })

        it('Should Insert a new Link', function () {
            linksInsert.apply({ userId: linkOne.userId }, [linkOne.url]);
            const userId = linkOne.userId;
            expect(Links.find({ userId }).count()).toBe(1);
        })

        it('Should set the visibility to false', function () {
            linksInsert.apply({ userId: linkOne.userId }, [linkOne.url]);

            const userId = linkOne.userId;
            const _id = Links.findOne({ userId })._id

            linksSetVisibility.call({ userId: linkOne.userId }, _id, false)

            expect(Links.find({ visible: false }).count()).toBe(1)
        })

        it('Should track visits', function () {
            linksInsert.apply({ userId: linkOne.userId }, [linkOne.url]);

            const userId = linkOne.userId;
            const _id = Links.findOne({ userId })._id

            linksTrackVisit.call({ userId: linkOne.userId }, _id)

            expect(Links.find({ visitedCount: 1 }).count()).toBe(1)
        })

        it('Should return user links', function () {
            linksInsert.apply({ userId: linkOne.userId }, [linkOne.url]);

            const res = publishLinks.apply({ userId: linkOne.userId });

            const notes = res.fetch()

            expect(notes.length).toBe(1);
        })

        it('Should return no notes for the user that has no links', function () {
            const res = publishLinks.apply({ userId: linkOne.userId });

            const notes = res.fetch()

            expect(notes.length).toBe(0);
        })

    });
}