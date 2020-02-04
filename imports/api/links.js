import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

import '../startup/simple-schema-configuration.js';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function () {
        return Links.find({ userId: this.userId });
    });
}

export function linksInsert(url) {
    if (!this.userId) {
        throw new Meteor.Error('Not-authorized');
    }

    new SimpleSchema({
        url: {
            type: String,
            label: 'Your link',
            regEx: SimpleSchema.RegEx.Url
        }
    }).validate({ url });


    Links.insert({
        _id: shortid.generate(),
        url,
        userId: this.userId,
        visible: true,
        visitedCount: 0,
        lastVisitedAt: null
    });
};

export function linksSetVisibility(_id, visible) {
    if (!this.userId) {
        throw new Meteor.Error('Not-authorized');
    }

    new SimpleSchema({
        _id: {
            type: String,
            min: 1,
        },
        visible: {
            type: Boolean
        }
    }).validate({ _id, visible });


    Links.update({
        _id,
        userId: this.userId
    }, {
        $set: { visible }
    });
};

export function linksTrackVisit(_id) {
    new SimpleSchema({
        _id: {
            type: String,
            min: 1,
        },
    }).validate({ _id });


    Links.update({ _id }, {
        $set: {
            lastVisitedAt: new Date().getTime()
        },
        $inc: {
            visitedCount: 1
        }
    });
};

Meteor.methods({
    'links.insert': linksInsert,
    'links.setVisibility':linksSetVisibility,
    'links.trackVisit':linksTrackVisit
});
