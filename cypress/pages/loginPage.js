export const loginPage = {

    selectors: {
        usernameInput: 'input[name=username]',
        passwordInput: 'input[name=password]'
    },

    attemptLogin: (username, password) => {
        cy.get(loginPage.selectors.usernameInput).type(username)
        cy.get(loginPage.selectors.passwordInput).type(password)
        loginPage.clickLogin()
    },

    clickLogin: () => {
        cy.get('.btn-primary').click()
    },

    clickRegister: () => {
        cy.get('.btn-link').click()
    }

}