/// <reference types = "cypress" />

import { navigate } from "../../page-objects/Common"

describe('End to End tests for the SignUp Page', function () {

    const credentials = [{
        validCredentials: {
            user: 'validEmail@test.com',
            password: '123456789'
        }
    }];

    beforeEach(() => {
        navigate();
        cy.contains('Short Lnk');
        cy.contains('Need an account?').should('have.attr', 'href', '/signup').click();
        cy.url().should('include', '/signup')
        cy.contains('Join Short Lnk')
    });

    it('Attempting registering with only the email field populated should pop up an error message',
        function () {
            cy.get('[name="email"]').should('have.attr', 'name', 'email')
                .type(credentials[0].validCredentials.user)
                .should('have.value', credentials[0].validCredentials.user);
            cy.contains('.button', 'Create Account').click();
            cy.contains('Password must be more than 8 characters long');
        });

    it('Attempting registering with only the password field and valid password length populated should ' +
        'pop up an error message', function () {
            cy.get('[name="password"]').should('have.attr', 'name', 'password')
                .type(credentials[0].validCredentials.password)
                .should('have.value', credentials[0].validCredentials.password);
            cy.contains('.button', 'Create Account').click();
            cy.contains('Need to set a username or email');
        });

    it('should show an error message when trying to register an existing email', function () {
        cy.get('[name="email"]').should('have.attr', 'name', 'email')
            .type(credentials[0].validCredentials.user)
            .should('have.value', credentials[0].validCredentials.user);
        cy.get('[name="password"]').should('have.attr', 'name', 'password')
            .type(credentials[0].validCredentials.password)
            .should('have.value', credentials[0].validCredentials.password);
        cy.contains('.button', 'Create Account').click();
        cy.contains('Email already exists.');
    });
});