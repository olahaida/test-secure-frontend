/// <reference types="cypress" />

import { getRandomEmail } from "../generators/emailGenerator"

describe('Email page tests', () => {

    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.get('li').last().find('.email').click()
    })

    it('should send email to user', () => {
        const email = getRandomEmail()
        cy.get('[name=subject]').type(email.subject)
        cy.get('[name=message]').type(email.message)
        cy.get('.btn-primary').click()

        cy.get('.alert-success').should('have.text', 'Email was scheduled to be send')
    })
})
