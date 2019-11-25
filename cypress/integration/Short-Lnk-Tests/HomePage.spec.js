describe('End to End tests of less-lnk app', function () {

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
        cy.visit('https://less-lnk.herokuapp.com/');
    });

    it('Visits the less-lnk app should have a sign in message displayed', function () {
        cy.contains('Short Lnk');
    });

    it('Logging in with empty credentials should trigger an error message', function () {
        cy.contains('.button', 'Login').click();
        cy.contains('p', 'Unable to login. Check Email and Password');
    });

    it('Visits the less-lnk app then it goes to the sign up page', function () {
        cy.contains('Need an account?').should('have.attr', 'href', '/signup').click();
        cy.url().should('include', '/signup')
        cy.contains('Join Short Lnk')
    });

    it('Attempting registering with only the email field populated should pop up an error message',
        function () {
            cy.contains('Need an account?').should('have.attr', 'href', '/signup').click();
            cy.contains('Join Short Lnk');
            cy.get('[name="email"]').should('have.attr', 'name', 'email')
                .type(credentials[0].validCredentials.user)
                .should('have.value', credentials[0].validCredentials.user);
            cy.contains('.button', 'Create Account').click();
            cy.contains('Password must be more than 8 characters long');
        });

    it('Attempting registering with only the password field and valid password length populated should ' +
        'pop up an error message', function () {
        cy.contains('Need an account?').should('have.attr', 'href', '/signup').click();
        cy.contains('Join Short Lnk');
        cy.get('[name="password"]').should('have.attr', 'name', 'password')
            .type(credentials[0].validCredentials.password)
            .should('have.value', credentials[0].validCredentials.password);
        cy.contains('.button', 'Create Account').click();
        cy.contains('Need to set a username or email');
    });
});