import mainPage from "../page-objects/main-page"
import userOptions from "./user-options";

class SiginPage {
    get userInput() {
        return cy.get('[id="text-input"]').should('be.visible');
    }

    get passwordInput() {
        return cy.get('[id="password-input"]').should('be.visible');
    }

    get signiBtn() {
        return cy.contains('Sign In').should('be.visible');
    }

    get signIntoSketchText() {
        return cy.contains('Sign in to Sketch').should('be.visible');
    }


    openPage() {
        cy.visit(Cypress.env('baseUrl') + '/signin');
        this.signIntoSketchText
    }


    signig(user, password) {
        this.openPage()
        this.userInput.type(user)
        this.passwordInput.type(password)
        this.signiBtn.click()
        mainPage.getStartedForFreeDialog.click()
        userOptions.userAvatar
    }
}


export default new SiginPage();