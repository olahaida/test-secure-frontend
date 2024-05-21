/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"

describe('register page tests in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register')
    })

    it('should successfully register', () => {
        // given
        const user = getRandomUser()
        cy.intercept('POST', '**/users/signup', (req) => {
            req.reply({
                statusCode: 201,
                body: {
                    token: 'fakeToken'
                },
            })
        })

        // when
        cy.get("input[name='username']").type(user.username);
        cy.get("input[name='password']").type(user.password);
        cy.get("input[name='firstName']").type(user.firstName)
        cy.get("input[name='lastName']").type(user.lastName)
        cy.get("input[name='email']").type(user.email)
        cy.get('.btn-primary').click()

        // then
        cy.get('.alert-success').should('have.text', 'Registration successful')

    })

})
