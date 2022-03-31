/// <reference types="cypress" />
import siginPage from "../page-objects/sigin-page"
import mainPage from "../page-objects/main-page";
import userOptions from "../page-objects/user-options";

describe('Test Signin flow', () => {
    beforeEach(() => {
        siginPage.openPage()
    })

    it('Validate Signin -> Signout', () => {
        siginPage.userInput.type(Cypress.env('user'))
        siginPage.passwordInput.type(Cypress.env('password'))
        siginPage.signiBtn.click()
        mainPage.getStartedForFreeDialog.click()
        userOptions.userAvatar.click()
        userOptions.signOut.click()
    })

    it('Validate Signin page fields', () => {
        siginPage.userInput.type('Wrong_email')
        siginPage.passwordInput.click()
        siginPage.signiBtn.click()
        cy.contains('This is not a valid email').should('be.visible')
        cy.contains('Password can’t be blank').should('be.visible')
    })

})
