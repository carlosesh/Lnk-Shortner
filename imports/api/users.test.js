import { Meteor } from 'meteor/meteor'
import { validateNewUser } from './users'
import expect from 'expect'

if (Meteor.isServer) {
    describe('users', function () {

        it("should allow valid email address", () => {
            const testUser = {
                emails: [
                    {
                        address: 'test@example.com'
                    }
                ]
            };

            const res = validateNewUser(testUser);

            expect(res).toBe(true);
        });

        it("should reject invalid email address by throwing an error", () => {
            const testUser = {
                emails: [
                    {
                        address: 'test'
                    }
                ]
            };

            expect(() => {
                validateNewUser(testUser)
            }).toThrow();
        });

    });
}