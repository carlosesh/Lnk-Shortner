import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';

export const Links = new Mongo.Collection('links'); 
export const LinksList = () => {
    Tracker.autorun(() => {
        return Links.find().fetch();
    });
};