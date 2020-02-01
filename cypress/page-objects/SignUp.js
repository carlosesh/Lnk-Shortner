export class SignUp {
    clickCreateAccountButtonButton() {
        cy.contains('.button', 'Create Account').click();
    }

    sendKeysToEmailField(content) {
        return cy.get('[name="email"]').should('have.attr', 'name', 'email')
            .type(content)
    }

    sendKeysToPasswordField(content) {
        return cy.get('[name="password"]').should('have.attr', 'name', 'password')
            .type(content);
    }

    createAccount(email, password) {
        this.sendKeysToEmailField(email)
        this.sendKeysToPasswordField(password)
        this.clickCreateAccountButtonButton()
    }
}