class LoginPage {

    clickLogin() {
        cy.get('.btn-primary').click()
    }

    attemptLogin(username: string, password: string) {
        cy.get('[name=username]').type(username)
        cy.get('[name=password]').type(password)
        this.clickLogin()
    }

}

export const loginPage = new LoginPage()