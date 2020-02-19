import { LoginPage } from './LoginPage'

export function navigate() {
    cy.visit('http://localhost:3000/');
}

export function navigateToLinks() {
    cy.visit('http://localhost:3000/links');
}

export function urlShouldContain(urlEndPoint) {
    cy.url().should('include', urlEndPoint)
}

export function isPresent(textToValidate) {
    cy.contains(textToValidate);
}

export function loginWithCredentials(username, password) {
    new LoginPage().sendKeysToEmailField(username);
    new LoginPage().sendKeysToPasswordField(password);
    new LoginPage().clickLoginButton();
}