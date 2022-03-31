class AccountPage {
    get personalSection() {
        return cy.contains('Personal').parents('section').scrollIntoView().should('be.visible')
    }

    get name() {
        this.personalSection.contains('Name').should('be.visible')
        return this.personalSection.find('[for="name-input"]').should('be.visible')
    }

    get email() {
        this.personalSection.contains('Email').should('be.visible')
        return this.personalSection.find('[for="email-input"]').should('be.visible')
    }

    get password() {
        this.personalSection.contains('Password').should('be.visible')
        return this.personalSection.find('[for="password-input"]').should('be.visible')
    }

    get twoFactorSection() {
        return cy.contains('Two-Factor Authentication (2FA)').parents('section').scrollIntoView().should('be.visible')
    }

    get enable2faBtn() {
        return this.twoFactorSection.contains('Enable 2FA…').should('be.visible')
    }

    get workspacesSection() {
        return cy.contains('Workspaces').parents('section').scrollIntoView().should('be.visible')
    }

    get createWorkspaceBtn() {
        return this.workspacesSection.contains('Create Workspace…').should('be.visible')
    }

    get workspacesList() {
        return this.workspacesSection.find('tbody').should('be.visible')
    }

    get emailNotificationsSection() {
        return cy.contains('Email Notifications').parents('section').scrollIntoView().should('be.visible')
    }

    get comments() {
        return this.emailNotificationsSection.find('[name="receiveCommentsNotifications"]').should('be.visible')
    }

    get otherSection() {
        return cy.contains('Other').parents('section').scrollIntoView().should('be.visible')
    }

    get deleteAccountBtn() {
        return this.otherSection.contains('Delete Account…').should('be.visible')
    }

}

export default new AccountPage();