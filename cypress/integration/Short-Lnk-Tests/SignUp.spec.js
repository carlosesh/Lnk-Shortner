/// <reference types = "cypress" />

import { navigate, isPresent, urlShouldContain } from "../../page-objects/Common"
import { LoginPage } from "../../page-objects/LoginPage";
import { SignUp } from '../../page-objects/SignUp';

describe('End to End tests for the SignUp Page', function () {

    const loginPage = new LoginPage();
    const signUpPage = new SignUp();

    const credentials = [{
        validCredentials: {
            user: 'validEmail@test.com',
            password: '123456789'
        }
    }];

    beforeEach(() => {
        navigate();
        loginPage.isPresent('Short Lnk');
        loginPage.clickNeedAnAccount();
        urlShouldContain('/signup');
        isPresent('Join Short Lnk');
    });

    it('Attempting registering with only the email field populated should pop up an error message',
        function () {
            signUpPage.sendKeysToEmailField(credentials[0].validCredentials.user);
            signUpPage.clickCreateAccountButtonButton();
            isPresent('Password must be more than 8 characters long')
        });

    it('Attempting registering with only the password field and valid password length populated should ' +
        'pop up an error message', function () {
            signUpPage.sendKeysToPasswordField(credentials[0].validCredentials.password);
            signUpPage.clickCreateAccountButtonButton();
            isPresent('Need to set a username or email');
        });

    it('should show an error message when trying to register an existing email', function () {
        signUpPage.createAccount(credentials[0].validCredentials.user,
            credentials[0].validCredentials.password);
        isPresent('Email already exists.');
    });
});