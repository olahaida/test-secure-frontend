/// <reference types="cypress" />

describe('Home page tests', () => {

    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
    })

    it('should display at least one user', () => {
        cy.get('li').should('have.length.at.least', 1)
    })
})
