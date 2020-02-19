export class LinksPage {

    clickAddLinkButton() {
        cy.get('.page-content .button').click();
    }

    clickShowHiddenLinksCheckBox() {
        cy.get('.checkbox__box').click();
    }

    clickVisitButton() {
        cy.get('.button--link').click()
    }

    clickCopyButton() {
        cy.get('.button[data-clipboard-text]').click()
    }

    clickHideButton() {
        cy.get('.button[data-clipboard-text] + .button').click()
    }
}