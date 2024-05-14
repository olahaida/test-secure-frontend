/// <reference types="cypress" />

describe('Test Arena login page tests', () => {

    beforeEach(() => {
        cy.visit('http://demo.testarena.pl/zaloguj')
        cy.get('#email').type(Cypress.env('ta_login'))
        cy.get('#password').type(Cypress.env('ta_password'))
        cy.get('#login').click()
    })

    it('should successfully login', () => {
        cy.get('.icon_mail').click()
    })
})

