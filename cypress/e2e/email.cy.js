/// <reference types="cypress" />

import { getRandomEmail } from "../generators/emailGenerator"
import { getRandomUser } from "../generators/userGenerator"

describe('Email page tests', () => {

    beforeEach(() => {
        const user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
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
