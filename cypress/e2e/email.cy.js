/// <reference types="cypress" />

import { getRandomEmail } from "../generators/emailGenerator"
import { getRandomUser } from "../generators/userGenerator"

describe('Email page tests', () => {

    let user

    beforeEach(() => {
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
        cy.get('li').contains(`${user.firstName} ${user.lastName}`).find('.email').click()
    })

    it('should correctly autocomplete email field', () => {
        cy.get('[name=email]').should('have.value', user.email).should('have.attr', 'disabled')
    })

    it('should send email to user', () => {
        const email = getRandomEmail()
        cy.get('[name=subject]').type(email.subject)
        cy.get('[name=message]').type(email.message)
        cy.get('.btn-primary').click()

        cy.get('.alert-success').should('have.text', 'Email was scheduled to be send')
    })
})
