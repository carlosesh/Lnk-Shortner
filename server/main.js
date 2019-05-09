import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(() => {

  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.EmailWithTLD
      }
    }).validate({ email });

    console.log('this is the user', user);

    return true;
  });

  // try {
  //   throw new Error('');
  // } catch (e) {

  // }

  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //     optional: true
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });

  // petSchema.validate({
  //   name: 'Pumba',
  //   age: 21,
  //   contactNumber: '6788369615'
  // });

  // const employeeSchema =  new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max:200
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.EmailWithTLD
  //   }
  // });

  // employeeSchema.validate({
  //   name: 'Carlos',
  //   hourlyWage: 60,
  //   email: 'carlosesh@outlook.com'
  // });

});
