/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/LoginPage";
import { navigate } from "../../page-objects/Common"

describe('End to End tests for the Login Page', function () {

    const loginPage = new LoginPage();

    const credentials = [{
        validCredentials: {
            user: 'validEmail@test.com',
            password: '123456789'
        }
    }, {
        invalidCredentials: {
            user: 'unvalidEmai@test.com',
            password: '12345678'
        }
    }];

    beforeEach(() => {
        navigate();
        loginPage.isPresent('Short Lnk');
        cy.url().should('not.include', '/signup');
    });

    it('Logging in with empty credentials should trigger an error message', function () {
        loginPage.clickLoginButton();
        loginPage.isPresent('p', 'Unable to login. Check Email and Password');
    });

    it('login with only the email field populated should pop up an error message',
        function () {
            loginPage.sendKeysToEmailField(credentials[0].validCredentials.user)
            loginPage.clickLoginButton();
            loginPage.isPresent('Unable to login. Check Email and Password');
        });

    it('login with only the password field and valid password length populated should ' +
        'pop up an error message', function () {
            loginPage.sendKeysToPasswordField(credentials[0].validCredentials.password)
            loginPage.clickLoginButton();
            loginPage.isPresent('Unable to login. Check Email and Password');
        });

    it('shouldn\'t Login with unvalid credentials', function () {
        loginPage.sendKeysToEmailField(credentials[1].invalidCredentials.user)
        loginPage.sendKeysToPasswordField(credentials[1].invalidCredentials.password)
        loginPage.clickLoginButton();
        loginPage.isPresent('Unable to login. Check Email and Password');
    });

    it('should Login with valid credentials', function () {
        loginPage.loginWithCredentials(credentials[0].validCredentials.user,
            credentials[0].validCredentials.password);
        cy.get('.header__title').should('have.text', 'Your Links');
    });
});
