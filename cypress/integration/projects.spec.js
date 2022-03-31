/// <reference types="cypress" />
import tools from "../tools/tools";
import projects from "../page-objects/projects";

describe('Test Projects Flow', () => {
    beforeEach(() => {
        cy.signin(Cypress.env('user'), Cypress.env('password'))
    })

    afterEach(() => {
        cy.signout()
    })


    it('Add and Delete a New project using left Bar', () => {
        const projectName = tools.getRandomText(10)

        projects.CreateProject(projectName)
        projects.ProjectCreatedMessage(projectName)
        projects.OpenProjectOptions(projectName)
        projects.deleteBtn.click()
        projects.GetDeleteDialogText(projectName)
        projects.deleteProjectBtn.click()
        projects.ProjectDeletedMessage(projectName)
    })

    it('Rename a Project using left Bar - Positivce scenario', () => {
        const projectName = tools.getRandomText(10)

        projects.CreateProject(projectName)
        projects.ProjectCreatedMessage(projectName)
        projects.OpenProjectOptions(projectName)
        projects.renameBtn.click()
        projects.RenamedBoxOnLeftBar.type(`${projectName}_rename`)
        projects.getNoDocumetInPropject.parent().click()
        projects.ProjectRenamedMessage
        projects.DeleteProject(`${projectName}_rename`)
    })

    it('Create a Project with more that 100 characters - Negative scenario', () => {
        projects.CreateProject(tools.getRandomText(110))
        cy.contains('name: should be at most 100 character(s)').should('be.visible')
        projects.cancelProjectBtn.click()
    })

    it('Rename a Project with more that 100 characters - Negative scenario', () => {
        const projectName = tools.getRandomText(10)

        projects.CreateProject(projectName)
        projects.RenameProjectOnLeftBar(projectName, tools.getRandomText(110))
        projects.getNoDocumetInPropject.parent().click()

        cy.contains('Your project name cannot be longer than 100 characters').should('be.visible')

        projects.RenamedBoxOnLeftBar.type('{esc}');
        projects.DeleteProject(projectName)
    })

    it('Rename a Project with empty name using left Bar - Negative scenario', () => {
        const projectName = tools.getRandomText(10)

        projects.CreateProject(projectName)
        projects.RenameProjectOnLeftBar(projectName, ' ')

        cy.contains('A project name is required').should('be.visible')

        projects.RenamedBoxOnLeftBar.type('{esc}');
        projects.DeleteProject(projectName)
    })

    it('Add project with already existing Name using left Bar - Negative scenario', () => {
        const projectName = tools.getRandomText(10)

        projects.CreateProject(projectName)
        projects.CreateProject(projectName)

        cy.contains(`A Project with the name “${projectName}” already exists`).should('be.visible')

        projects.cancelProjectBtn.click()
        projects.DeleteProject(projectName)
    })

    it('Rename project with already existing Name using left Bar - Negative scenario', () => {
        const projectName = tools.getRandomText(10)

        projects.CreateProject(projectName)
        projects.CreateProject(`${projectName}_2`)
        projects.RenameProjectOnLeftBar(projectName, `${projectName}_2`)
        projects.getNoDocumetInPropject.parent().click()

        cy.contains(`A Project with the name “${projectName}_2” already exists`).should('be.visible')

        projects.RenamedBoxOnLeftBar.type('{esc}');
        projects.DeleteProject(projectName)
        projects.DeleteProject(`${projectName}_2`)
    })
})
