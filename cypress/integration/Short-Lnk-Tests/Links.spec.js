/// <reference types = "cypress" />

import { LinksPage } from '../../page-objects/LinksPage'
import { AddLinkForm } from '../../page-objects/AddLinkForm'
import { urlShouldContain, isPresent, loginWithCredentials, navigate } from '../../page-objects/Common'

describe('End to End tests for the Links Page', function () {

    const linksPage = new LinksPage();
    const addLinkForm = new AddLinkForm();
    const URL = 'https://www.google.com/';

    beforeEach(() => {
        navigate();
        loginWithCredentials('validEmail@test.com', '123456789')
        isPresent('Your Links');
        urlShouldContain('/links');
        cy.clearCookies();
    });

    it('Should show No Links Found if no links have been added', function () {
        isPresent('No Links Found')
    });

    it('Should click add Link', function () {
        linksPage.clickAddLinkButton()
    });

    it('Should show No Links Found when clicking Show hidden links and no link has been added', function () {
        linksPage.clickShowHiddenLinksCheckBox()
        isPresent('No Links Found')
    });

    it('Should throw an error message trying to add a link with and empty field for the URL', function () {
        linksPage.clickAddLinkButton()
        addLinkForm.clickAddLink()
        isPresent('Your link must be a valid URL')
    });

    it('Should close the form when clicking cancel', function () {
        linksPage.clickAddLinkButton()
        addLinkForm.clickCancelButton()
        cy.get('form').should('not.exist');
    });

    it('Should add a new link', function () {
        linksPage.clickAddLinkButton()
        addLinkForm.sendKeysToUrlInput(URL)
        addLinkForm.clickAddLink()
        cy.get('h2').contains(URL)
    });

    it('Should verify the copy holds the property of the URL to be visited', function () {
        cy.get('.button[data-clipboard-text]').should(($div) => {
            expect($div.get(0).getAttribute('data-clipboard-text')).to.include('http://localhost:3000/')
        })
    })

    it('Should visit the desired page through the short link generated by the app', function () {
        cy.get('.button--link').then(function ($a) {
            // extract the fully qualified href property
            const href = $a.prop('href')
    
            // make an http request for this resource
            // outside of the browser
            cy.request(href)
            // drill into the response body
            .its('body')
    
            // and assert that its contents have the <html> response
            .should('include', 'alt="Google"')
            .and('include', 'value="Google Search"')
            .and('include', 'value="I\'m Feeling Lucky"')
          })
    })

    it('Should hide the newly added record when clicking hide', function () {
        linksPage.clickHideButton();
        isPresent('No Links Found')
    })

    it('Should show hidden links when clicking the Show Hiden Links checkbox', function () {
        linksPage.clickShowHiddenLinksCheckBox()
        !isPresent('No Links Found')
        cy.get('h2').contains(URL)
    })
});
