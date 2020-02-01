export function navigate() {
    cy.visit('http://localhost:3000/');
}

export function urlShouldContain(urlEndPoint) {
    cy.url().should('include', urlEndPoint)
}

export function isPresent(textToValidate) {
    cy.contains(textToValidate);
}