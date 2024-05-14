/// <reference types="cypress" />

describe('Login page tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8081')
    })

    it('should successfully login', () => {
        cy.get('input[name=username]').type('admin')
        cy.get('input[name=password]').type('admin')
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

})
