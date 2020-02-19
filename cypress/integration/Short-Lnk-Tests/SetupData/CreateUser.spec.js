/// <reference types = "cypress" />
import { navigate, urlShouldContain, isPresent } from "../../../page-objects/Common";
import { LoginPage } from "../../../page-objects/LoginPage";
import { SignUp } from '../../../page-objects/SignUp';

describe('End to End tests for the SignUp Page', function () {

    const loginPage = new LoginPage();
    const signUpPage = new SignUp();

    const credentials = [{
        validCredentials: {
            user: 'validEmail@test.com',
            password: '123456789'
        }
    }];

    before(() => {
        navigate();
        loginPage.isPresent('Short Lnk');
        loginPage.clickNeedAnAccount();
        urlShouldContain('/signup');
        isPresent('Join Short Lnk');
    });

    it('should show an error message when trying to register an existing email', function () {
        signUpPage.createAccount(credentials[0].validCredentials.user,
            credentials[0].validCredentials.password);
        cy.get('.header__title').should('have.text', 'Your Links');
    });
});