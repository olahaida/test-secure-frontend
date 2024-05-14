/// <reference types="cypress" />

describe('Test Arena messages page tests', () => {

    beforeEach(() => {
        cy.visit('http://demo.testarena.pl/zaloguj')
        cy.get('#email').type(Cypress.env('ta_login'))
        cy.get('#password').type(Cypress.env('ta_password'))
        cy.get('#login').click()
    })

    it('should add new message', () => {
        cy.get('.icon_mail').click()
        const message = `Testowa wiadomość wygenerowana ${getDate()}`
        cy.get('#j_msgContent', { timeout: 6000 }).type(message)
        cy.get('#j_msgResponse-193').click()
        cy.get('.message_content_text').contains(message).should('exist')
    })
})

const getDate = () => new Date().toISOString().slice(0, 19).replace(/-/g, '').replace(/:/g, '');

