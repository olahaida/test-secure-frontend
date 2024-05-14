/// <reference types="cypress" />

describe('Login page tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8081')
    })

    it('should successfully login', () => {
        cy.get('input[name=username]').type(Cypress.env('username'))
        cy.get('input[name=password]').type(Cypress.env('password'))
        cy.get('.btn-primary').click()

        cy.get('h1').should('contain.text', 'Slawomir')
    })

    it('should display incorrect credentials message on failed login', () => {
        cy.get('input[name=username]').type('wrong')
        cy.get('input[name=password]').type('wrong')
        cy.get('.btn-primary').click()

        cy.get('.alert').should('have.text', 'Invalid username/password supplied')
    })

    it('should navigate to the Register page and verify the URL and header', () => {
        cy.get('.btn-link').click();
        cy.url().should('contain', '/register');
        cy.get('h2').contains('Register').should('be.visible')
    });

    it('should display validation messages for empty fields', () => {
        // when
        cy.get('button.btn-primary').click()

        // then
        cy.get('input[name=username]').should('have.class', 'is-invalid')
        cy.get('input[name=username]').siblings('.invalid-feedback').should('contain', 'Required field length is 4 or more')
        cy.get('input[name=password]').should('have.class', 'is-invalid')
        cy.get('input[name=password]').siblings('.invalid-feedback').should('contain', 'Required field length is 4 or more')
    });

})
