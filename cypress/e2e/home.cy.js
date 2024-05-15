/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"

describe('Home page tests', () => {

    let user

    beforeEach(() => {
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
    })

    it('should display at least one user', () => {
        cy.get('li').should('have.length.at.least', 1)
    })

    it('should successfully logout', () => {
        cy.get('#logout').click()

        cy.url().should('contain', '/login')
        cy.get('h2').should('have.text', 'Login')
    })

    it('should go to Add more users', () => {
        cy.get('#addmore').click();

        cy.url().should('contain', '/add-user')
    })
})
