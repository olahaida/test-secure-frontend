/// <reference types="cypress" />

describe('Test Arena login page tests', () => {

    beforeEach(() => {
        cy.visit('http://demo.testarena.pl/zaloguj')
    })

    it('should successfully login', () => {
        cy.get('#email').type(Cypress.env('ta_login'))
        cy.get('#password').type(Cypress.env('ta_password'))
        cy.get('#login').click()

        cy.get('.user-info > small').should('have.text', Cypress.env('ta_login'))
    })
})

