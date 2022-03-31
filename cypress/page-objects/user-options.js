class UserOptions {
    get userAvatar() {
        return cy.get('[data-testid="user-avatar"]').should('be.visible');
    }

    get getAccountBox() {
        return cy.get('[data-placement="top-start"]').should('be.visible');
    }

    get signOut() {
        return this.getAccountBox.contains('Sign Out').should('be.visible');
    }

    get account() {
        return this.getAccountBox.contains('Account').should('be.visible');
    }
}


export default new UserOptions();