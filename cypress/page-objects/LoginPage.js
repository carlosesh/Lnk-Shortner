export class LoginPage {

    clickLoginButton() {
        cy.get('.button').click();
    }

    sendKeysToEmailField(content) {
        return cy.get('[name="email"]').should('have.attr', 'name', 'email')
            .type(content)
    }

    sendKeysToPasswordField(content) {
        return cy.get('[name="password"]').should('have.attr', 'name', 'password')
            .type(content);
    }

    isPresent(textToValidate) {
        cy.contains(textToValidate);
    }

    loginWithCredentials(user, password) {
        this.sendKeysToEmailField(user);
        this.sendKeysToPasswordField(password);
        this.clickLoginButton();
    }
}