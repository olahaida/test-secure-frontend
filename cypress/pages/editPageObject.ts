import { User } from "../types/user";

export const editPage = {

    selectors: {
        firstNameInput: "input[name='firstName']",
        lastNameInput: "input[name='lastName']",
        emailInput: "input[name='email']"
    },

    verifyAutocompletion: (user: User) => {
        cy.get(editPage.selectors.firstNameInput).should('have.value', user.firstName);
        cy.get(editPage.selectors.lastNameInput).should('have.value', user.lastName);
        cy.get(editPage.selectors.emailInput).should('have.value', user.email);
        cy.get("input[name='username']").should('have.value', user.username);
        cy.get("input[name='roles']").should('have.value', user.roles.join(','));
    },

    attemptToEditUserData: (user: User) => {
        cy.get(editPage.selectors.firstNameInput).clear().type(user.firstName)
        cy.get(editPage.selectors.lastNameInput).clear().type(user.lastName)
        cy.get(editPage.selectors.emailInput).clear().type(user.email)
        cy.get('.btn-primary').click()
    }

}