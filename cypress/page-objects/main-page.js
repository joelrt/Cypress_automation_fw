class MainPage {
    get getStartedForFreeDialog() {
        return cy.get('[role="dialog"]', {timeout: 10 * 1000}).contains('Continue to Workspace')
    }
}

export default new MainPage();