/// <reference types="cypress" />
import userOptions from "../page-objects/user-options"
import accountPage from "../page-objects/account-page"

describe('Test Account Page', () => {
    beforeEach(() => {
        cy.signin(Cypress.env('user'), Cypress.env('password'))
        userOptions.userAvatar.click()
        userOptions.getAccountBox.click()
        userOptions.account.click()
    })

    afterEach(() => {
        cy.signout()
    })

    it('Verify all Sections are present in the Page', () => {
        accountPage.personalSection
        accountPage.name
        accountPage.email.get('[disabled]')
        accountPage.password.get('[disabled]')
        accountPage.twoFactorSection
        accountPage.enable2faBtn
        accountPage.workspacesSection
        accountPage.workspacesList
        accountPage.createWorkspaceBtn
        accountPage.emailNotificationsSection
        accountPage.comments
        accountPage.otherSection
        accountPage.deleteAccountBtn
    })

})
