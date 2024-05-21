/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"
import { User } from "../types/user"

describe('Edit page tests', () => {
    let user: User

    beforeEach(() => {
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
        cy.get('li').contains(`${user.firstName} ${user.lastName}`).find('.edit').click()
    })

    afterEach(() => {
        cy.get('@jwtToken').then((token) => {
            cy.deleteUser(user.username, `${token}`)
        })
    })

    it('should correctly autofill user data', () => {
        cy.get("input[name='firstName']").should('have.value', user.firstName);
        cy.get("input[name='lastName']").should('have.value', user.lastName);
        cy.get("input[name='email']").should('have.value', user.email);
        cy.get("input[name='username']").should('have.value', user.username);
        cy.get("input[name='roles']").should('have.value', user.roles.join(','));
    })

})
