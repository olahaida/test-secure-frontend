export const registerPage = {
    selectors: {
        firstNameInput: "input[name=firstName]",
        lastNameInput: "input[name=lastName]",
        usernameInput: "input[name=username]",
        passwordInput: "input[name=password]",
        emailInput: "input[name=email]",
        registerButton: ".btn-primary"
    },
    
    attemptRegister: (user) => {
        cy.get(registerPage.selectors.firstNameInput).type(user.firstName)
        cy.get(registerPage.selectors.lastNameInput).type(user.lastName)
        cy.get(registerPage.selectors.usernameInput).type(user.username)
        cy.get(registerPage.selectors.passwordInput).type(user.password)
        cy.get(registerPage.selectors.emailInput).type(user.email)
        cy.get(registerPage.selectors.registerButton).click()
    },

    clickRegister: () => {
        cy.get(registerPage.selectors.registerButton).click()
    }
}