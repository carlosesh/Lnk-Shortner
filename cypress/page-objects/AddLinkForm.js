export class AddLinkForm {

    clickAddLink() {
        cy.get('form').contains('Add Link').click();
    }

    clickCancelButton() {
        cy.get('form').contains('Cancel').click();
    }

    sendKeysToUrlInput(url) {
        cy.get('input[placeholder="url"]').type(url);
    }

}