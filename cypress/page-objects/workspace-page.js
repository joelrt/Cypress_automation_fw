class WorkspacePage {
    get name() {
        return cy.get('[name="name"]').should('be.visible')
    }

    get wokspcImage() {
        return cy.get('[data-testid="dropzone"]').should('be.visible')
    }

    get startUsingSketchBtn() {
        return cy.contains('Start Using Sketch').should('be.visible')
    }

    get continueToTheWorkspaceBtn() {
        return cy.contains('Continue to the Workspace').scrollIntoView().should('be.visible')
    }

    dragAndDropImage() {
        this.wokspcImage.selectFile('cypress/tools/image.png', {
            action: 'drag-drop'
        })
    }

    openPage() {
        cy.visit(Cypress.env('baseUrl') + '/workspace/create');
    }
}

export default new WorkspacePage();