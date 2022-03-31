class PeopleAndSettingsPage {
    openPage() {
        cy.contains('People & Settings').should('be.visible').click()
    }

    deleteWorkspace(name) {
        cy.contains('Delete Workspace…').scrollIntoView().should('be.visible').click()
        cy.get('[id="name-input"]').should('be.visible').type(name)
        cy.contains('Delete Workspace').should('be.visible').click()

    }
}

export default new PeopleAndSettingsPage();