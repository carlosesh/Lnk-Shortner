import { Meteor } from 'meteor/meteor';
import Enzyme from 'enzyme';
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isTest) {

    describe("short-lnk", function () {
        it("package.json has correct name", async function () {
            const { name } = await import("../../package.json");
            expect(name).toStrictEqual("short-lnk")
        });

    });

}