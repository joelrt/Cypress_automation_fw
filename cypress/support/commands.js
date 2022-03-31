import siginPage from "../page-objects/sigin-page"
import userOptions from "../page-objects/user-options";


Cypress.Commands.add('signin', (user, password) => {
    siginPage.signig(user, password)
})

Cypress.Commands.add('signout', () => {
    cy.wait(2000)
    userOptions.userAvatar.click()
    userOptions.signOut.click()
    siginPage.signIntoSketchText
})
