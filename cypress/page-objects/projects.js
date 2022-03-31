class Projects {
    get addNewProject() {
        return cy.get('[aria-label="Add a new project"]')
    }

    get createProjectBtn() {
        return cy.contains('Create Project')
    }

    get cancelProjectBtn() {
        return cy.contains('Cancel').should('be.enabled')
    }

    get getNoDocumetInPropject() {
        return cy.contains('No documents in this project yet')
    }

    get projectNameInput() {
        return cy.get('[name="projectName"]').should('be.visible')
    }

    get deleteBtn() {
        return cy.contains('Delete…').should("be.visible")
    }

    get renameBtn() {
        return cy.contains('Rename…').should("be.visible")
    }

    get deleteProjectModal() {
        return cy.get('.modal-enter-done')
    }

    get deleteProjectBtn() {
        return this.deleteProjectModal.find(`[data-testid="confirmation-button"]`).should("be.visible")
    }

    get ProjectRenamedMessage() {
        return cy.contains('Project was renamed successfully').should("be.visible")
    }

    get RenamedBoxOnLeftBar() {
        return cy.get('form[action="#"]').should("be.visible").clear()
    }

    GetDeleteDialogText(projectName) {
        this.deleteProjectModal.contains(`Move “${projectName}” to Trash?`).should("be.visible")
    }

    ProjectCreatedMessage(projectName) {
        return cy.contains(`"${projectName}" Project created`).should('be.visible')
    }

    ProjectDeletedMessage(projectName) {
        cy.contains(`"${projectName}" has been moved to Trash`).should("be.visible")
    }

    OpenProjectOptions(projectName) {
        cy.get(`[aria-label="Link to ${projectName}"]`).realHover('mouse').click()
        cy.get('.active button').should('be.visible').click()
    }


    CreateProject(projectName) {
        this.addNewProject.click()
        this.createProjectBtn.should('not.be.enabled')
        this.projectNameInput.type(projectName)
        this.createProjectBtn.should('be.enabled').click()
    }

    DeleteProject(projectName) {
        this.OpenProjectOptions(projectName)
        this.deleteBtn.click()
        this.GetDeleteDialogText(projectName)
        this.deleteProjectBtn.click()
        this.ProjectDeletedMessage(projectName)
    }

    RenameProjectOnLeftBar(projectName, projectRename) {
        cy.wait(2000)
        this.OpenProjectOptions(projectName)
        this.renameBtn.click()
        this.RenamedBoxOnLeftBar.type(`${projectRename}`)
    }

}

export default new Projects()