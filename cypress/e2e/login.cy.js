/// <reference types="cypress" />

import { alertComponent } from "../components/alert"
import { loginPage } from "../pages/loginPage"

describe('Login page tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8081')
    })

    it('should successfully login', () => {
        // when
        loginPage.attemptLogin(Cypress.env('username'), Cypress.env('password'))

        // then
        cy.get('h1').should('contain.text', 'Slawomir')
    })

    it('should display incorrect credentials message on failed login', () => {
        // when
        loginPage.attemptLogin('wrong', 'wrong')

        // then
        alertComponent.verifyError('Invalid username/password supplied')
    })

    it('should navigate to the Register page and verify the URL and header', () => {
        // when
        loginPage.clickRegister();

        // then
        cy.url().should('contain', '/register');
        cy.get('h2').contains('Register').should('be.visible')
    });

    it('should display validation messages for empty fields', () => {
        // when
        loginPage.clickLogin()
        
        // then
        assertValidationErrors()
    });

})

const assertValidationErrors = () => {
    cy.get(loginPage.selectors.usernameInput).should('have.class', 'is-invalid')
    cy.get(loginPage.selectors.usernameInput).siblings('.invalid-feedback')
        .should('contain', 'Required field length is 4 or more')
    cy.get(loginPage.selectors.passwordInput).should('have.class', 'is-invalid')
    cy.get(loginPage.selectors.passwordInput).siblings('.invalid-feedback')
        .should('contain', 'Required field length is 4 or more')

}
