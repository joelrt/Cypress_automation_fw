/// <reference types="cypress" />
import workspacePage from "../page-objects/workspace-page";
import tools from "../tools/tools";
import mainPage from "../page-objects/main-page";
import settings from "../page-objects/people-and-settings-page";

describe('Test Workspace Flow', () => {
    beforeEach(() => {
        cy.signin(Cypress.env('user'), Cypress.env('password'))
        workspacePage.openPage()
    })

    afterEach(() => {
        cy.signout()
    })

    it.only('Create and Delete a Workspace', () => {
        const name = tools.getRandomText(10).replace('.', '')

        workspacePage.name.type(name)
        workspacePage.dragAndDropImage()
        workspacePage.startUsingSketchBtn.click()
        cy.contains('You’re all set up', {timeout: 10 * 1000}).should('be.visible')
        workspacePage.continueToTheWorkspaceBtn.click()
        mainPage.getStartedForFreeDialog.click()
        settings.openPage()
        settings.deleteWorkspace(name)
        cy.contains('Your workspace was successfully deleted.').should('be.visible')

    })
})